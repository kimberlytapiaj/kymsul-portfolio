# Prompt para Codex · subir los medios a Cloudflare R2

Copia todo lo que está debajo de la línea y pégalo en Codex.

---

Trabaja en `/Users/kimberly/Documents/ChatGPT/Kymsul/kymsul-portfolio` (Next.js 16). Antes de empezar, lee `AGENTS.md`, `MEDIA.md` y `MIGRACION_R2.md` (parte 2).

**Reglas.**
- No hagas commit, push, deploy, reset ni limpieza destructiva.
- No borres `public/media/` completo ni la carpeta de originales `../projects/kymsul-renovacion/work/original-assets/`.
- No muestres en el chat los valores de `.env.local`.
- Si algo falla, detente y avísame. No improvises.

## Antes de empezar

Los 9 videos que estaban provisionales ya se recomprimieron el 10 de octubre con AVFoundation: H.264 a 720p, unos 2.4 Mbps, AAC y fast start. Pesaban 84.7 MB y ahora 29.5 MB. **No hace falta `ffmpeg`.**

Comprueba que el dominio ya esté en Cloudflare: `dig +short NS kymsul.art` debe devolver los nameservers `*.ns.cloudflare.com`, y `dig +short media.kymsul.art` debe responder. Si no es así, **detente**: falta la parte 1 de `MIGRACION_R2.md`, que hace Kimberly.

## Paso 1 · Subir a Cloudflare R2

Sigue `MIGRACION_R2.md`, parte 2, con este cambio: el número de archivos ya no es 935. El sitio cambió, así que usa el que reporte `check-media` (hoy son unos 934).

1. Confirma que `.env.local` existe, que define `R2_ACCOUNT_ID`, `R2_BUCKET`, `R2_ACCESS_KEY_ID` y `R2_SECRET_ACCESS_KEY` (solo comprueba que existan, sin imprimirlos) y que Git lo ignora: `git check-ignore -v .env.local`.
2. Haz una prueba en seco: `npm run media:upload:dry`. Debe listar solo los archivos del manifiesto.
3. Sube: `npm run media:upload`. Si ves «Different bytes already published», detente y avísame.
4. Verifica en remoto: `NEXT_PUBLIC_MEDIA_BASE_URL=https://media.kymsul.art npm run media:check`. Debe decir `Verified N media files (CDN).`, incluida la prueba de video con respuesta 206.
5. Compila: `NEXT_PUBLIC_MEDIA_BASE_URL=https://media.kymsul.art npm run build -- --webpack`.
6. Haz una prueba local apuntando a R2. Abre `/es`, `/es/proyectos`, `/es/proyectos/kop`, `/es/proyectos/kings-tavern` y `/es/archivo`, y revisa que:
   - las imágenes vengan de `media.kymsul.art`;
   - los videos solo se pidan al pulsar «Ver video» y se puedan adelantar;
   - no haya errores en consola.

## Paso 2 · Avísame

Dame un resumen con:
- cuántos archivos se subieron;
- el resultado de `media:check` en remoto;
- cualquier problema que encuentres.

No configures nada en Vercel; eso lo hago yo después (parte 1, paso 4 de `MIGRACION_R2.md`).
