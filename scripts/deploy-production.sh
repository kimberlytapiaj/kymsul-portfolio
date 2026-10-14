#!/usr/bin/env bash
# Publishes renovacion-main to kymsul.art.
#
# Vercel builds production from `master` of the public repo (remote `origin`).
# This adds ONE commit on top of the current origin/master whose files are
# renovacion-main's, plus a .env.production with the public media address.
# Old history stays; going back = pushing the previous tree again.
#
#   scripts/deploy-production.sh https://pub-xxxx.r2.dev            # check + build, no push
#   scripts/deploy-production.sh https://pub-xxxx.r2.dev --push     # …and publish
#   add --with-docs to keep docs/ (only if the repo is private)
set -euo pipefail
cd "$(dirname "$0")/.."

BASE="${1:?Usage: scripts/deploy-production.sh <media base URL> [--push] [--with-docs]}"
BASE="${BASE%/}"; BASE="${BASE%/media}"
PUSH=false; DOCS=false
for a in "${@:2}"; do
  case "$a" in --push) PUSH=true ;; --with-docs) DOCS=true ;; *) echo "Unknown option $a"; exit 1 ;; esac
done

[ "$(git branch --show-current)" = renovacion-main ] || { echo "Run it from renovacion-main."; exit 1; }
[ -z "$(git status --porcelain)" ] || { echo "Commit or stash your changes first."; exit 1; }

echo "1/4 Checking every media file at $BASE …"
NEXT_PUBLIC_MEDIA_BASE_URL="$BASE" node scripts/check-media.mjs

echo "2/4 Production build with that address …"
NEXT_PUBLIC_MEDIA_BASE_URL="$BASE" npx next build --webpack >/tmp/kymsul-deploy-build.log 2>&1 \
  || { tail -30 /tmp/kymsul-deploy-build.log; exit 1; }

echo "3/4 Preparing the commit on top of origin/master …"
git fetch -q origin master
INDEX="$(mktemp)"; trap 'rm -f "$INDEX"' EXIT
export GIT_INDEX_FILE="$INDEX"
git read-tree HEAD
$DOCS || git rm -r -q --cached --ignore-unmatch docs
ENV_BLOB="$(printf '# Public address of the images and videos (Cloudflare R2). Not a secret.\nNEXT_PUBLIC_MEDIA_BASE_URL=%s\n' "$BASE" | git hash-object -w --stdin)"
git update-index --add --cacheinfo 100644 "$ENV_BLOB" .env.production
TREE="$(git write-tree)"
unset GIT_INDEX_FILE
COMMIT="$(git commit-tree "$TREE" -p origin/master -m "Nuevo portafolio: renovación editorial ($(git rev-parse --short HEAD))

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>")"
echo "    commit $COMMIT (files of renovacion-main $(git rev-parse --short HEAD), docs/: $DOCS)"

if $PUSH; then
  echo "4/4 Publishing to origin/master (Vercel deploys it) …"
  git push origin "$COMMIT:refs/heads/master"
  echo "Done. Previous live version: $(git rev-parse --short origin/master)"
else
  echo "4/4 Not published. Re-run with --push to publish."
fi
