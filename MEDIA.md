# Media publishing

Original PNG/JPG/GIF/video files are no longer part of the website checkout. Preserve original source files in an archive outside this repository. Do not rewrite Git history to remove previous versions: that would require a separate migration of everyone’s clones.

`lib/media-manifest.json` maps editorial paths to content-hashed delivery files, dimensions, responsive variants and video posters. The UI reads `lib/media-index.json`, a compact copy generated from the manifest by `scripts/media-index.mjs` (run by `media:prepare` and `prebuild`); case-study content can keep its readable `/assets/…` identifiers. `public/media` is generated and intentionally ignored by Git.

## Preview locally

Obtain the prepared `media/` delivery folder and place it in `public/media/`. Run `npm ci`, `npm run media:check`, then `npm run dev`. Local playback and galleries work without a CDN account.

To regenerate from original assets: `FFMPEG_PATH=/path/to/ffmpeg npm run media:prepare -- /absolute/path/to/original-assets`. The source directory must have the same structure as the old `public/assets`. FFmpeg must provide libx264 and WebP. Sharp comes from the installed Next dependency. Then run `npm run summaries` after editing project text, and `npm run build`.

The preparation script reads asset references from app/components/lib, preserves aspect ratios, generates WebP variants up to 2400 px and H.264 MP4 up to 1280 px with fast-start metadata. Review fine type and motion detail at actual display size before publishing a new batch. It does not edit the archive.

## Publish through Cloudflare R2 or another CDN

1. Create a storage bucket and connect a public HTTPS custom domain (for example `media.kymsul.art`). Do not commit credentials or private signed URLs.
2. Upload the prepared folder as `media/<hash>.<extension>` at the bucket root. Preserve filenames. Set the correct Content-Type (`image/webp`, `video/mp4`, `image/svg+xml`) and `Cache-Control: public, max-age=31536000, immutable`. Video serving must support byte-range requests.
3. Set `NEXT_PUBLIC_MEDIA_BASE_URL=https://media.kymsul.art` in the deployment environment. Do not include `/media` in the value; the manifest already contains it. This is a public base URL, not a secret.
4. Run `npm run media:check` with that environment variable. It checks every remote object before build. Run `npm run build` in the same environment. The URL is embedded during the build, so changing it requires rebuilding.
5. Preview the deployment and verify images, video playback, range requests, sitemap, language routes and social previews before promoting it.

Until the bucket is configured and all objects are verified, use the local delivery folder. A fresh checkout without either remote storage or local delivery files intentionally fails the prebuild check. Do not bypass it for deployment.

For R2 the repo includes a zero-dependency uploader: `npm run media:upload:dry`, then `npm run media:upload` (credentials in ignored `.env.local`; see `MIGRACION_R2.md` for the full step-by-step in Spanish). Alternatively, via an S3-compatible CLI, the upload shape is `aws s3 sync /path/to/media s3://BUCKET/media --endpoint-url https://ACCOUNT.r2.cloudflarestorage.com --cache-control 'public,max-age=31536000,immutable'`. Configure credentials outside this repo. Review the destination before running; no `--delete` is needed.

## Behavior and maintenance

- Responsive image variants are served directly by the browser/CDN, without a second image transformation service.
- Videos have lightweight posters. No video URL is attached before the visitor presses Play. Leaving the viewport pauses playback.
- Carousels mount only the selected slide. Enlargements use a native modal with Escape, focus containment and focus restoration.
- Keep old hashed objects during releases and rollback windows. Never overwrite a published hash with different bytes. The encoding version in the script must change when encoding settings change.
- The public media base affects all images, posters and video URLs. If the CDN fails, the UI cannot silently restore deleted original paths. Keep a backup and verify before publishing.
- For future large video libraries, a managed streaming service can supply adaptive playback; this small portfolio currently uses on-demand MP4.

The live R2/Blob account, billing and DNS are not configured by this change.
