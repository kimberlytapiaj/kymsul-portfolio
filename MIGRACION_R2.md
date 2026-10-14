# Migración de imágenes y videos a Cloudflare R2

Objetivo: que las imágenes y videos del portafolio se sirvan desde un contenedor gratuito (Cloudflare R2) en `https://media.kymsul.art`, en lugar de vivir dentro del proyecto. El sitio sigue en Vercel y el dominio sigue registrado en Namecheap.

Estado al 10 de octubre de 2026: el código ya está listo. Falta crear la cuenta, el contenedor y las claves (parte 1, la hace Kimberly) y luego subir y verificar (parte 2, la ejecuta Codex).

| Qué | Dónde |
|---|---|
| Archivos web que se suben | `public/media/` — los archivos del manifiesto (~934 al 10 oct 2026, ~250 MB: WebP, MP4, SVG); la cifra cambia al añadir o quitar piezas. Ignorados por Git. |
| Originales (no se suben) | `../projects/kymsul-renovacion/work/original-assets/` — conservarlos siempre. |
| Script de subida | `scripts/upload-media-r2.mjs` (`npm run media:upload`, `npm run media:upload:dry`) |
| Verificación | `scripts/check-media.mjs` (`npm run media:check`) — revisa todos los archivos del manifiesto y que los videos acepten «range requests». |
| Detalle técnico | `MEDIA.md` |

---

## Parte 1 · Pasos de Kimberly

Ninguna clave ni contraseña debe pegarse en un chat (Claude, Codex u otro). Solo van en el archivo `.env.local` y en Vercel.

### 1. Mover el DNS de Namecheap a Cloudflare (gratis)

El dominio **sigue comprado en Namecheap**; solo cambia quién responde el DNS. Esto es necesario para conectar `media.kymsul.art` al contenedor.

1. Crea una cuenta en https://dash.cloudflare.com/sign-up (plan **Free**).
2. En Cloudflare: **Add a domain** → escribe `kymsul.art` → elige el plan **Free**.
3. Cloudflare copia los registros DNS actuales. **Antes de continuar, compáralos con los de Namecheap** (Namecheap → Domain List → kymsul.art → Advanced DNS):
   - Los de Vercel: normalmente un `A` para `@` con `76.76.21.21` y un `CNAME` para `www` con `cname.vercel-dns.com` (usa los que te muestre Vercel en Project → Settings → Domains). Déjalos en **DNS only** (nube gris), como recomienda Vercel.
   - Si tienes correo con tu dominio (registros `MX`, `TXT` de SPF/DKIM), deben estar todos. Si falta alguno, el correo deja de llegar.
4. Cloudflare te dará **dos nameservers** (por ejemplo `xxx.ns.cloudflare.com`).
5. En Namecheap → Domain List → kymsul.art → **Nameservers** → **Custom DNS** → pega los dos de Cloudflare → guarda (✓).
6. Espera a que Cloudflare marque el dominio como **Active** (minutos a 24 h). Mientras tanto, el sitio sigue funcionando.
7. Comprueba que https://kymsul.art abre bien.

### 2. Activar R2 y crear el contenedor

1. En Cloudflare: menú **R2 Object Storage** → **Activate / Purchase R2**. Te pedirá un método de pago como verificación: el plan gratuito incluye 10 GB y no cobra por descargas; solo cobraría si superas el límite gratis.
2. **Create bucket** → nombre `kymsul-media` → ubicación automática → clase **Standard** (la gratuita; no elijas *Infrequent Access*).
3. Dentro del bucket → **Settings** → **Public access** → **Custom Domains** → **Connect Domain** → `media.kymsul.art` → confirma. Espera a que diga **Active**.
4. No hace falta activar la URL `r2.dev`; no se usa en producción.

### 3. Crear las claves de subida

1. R2 → **Manage R2 API Tokens** (o *API* → *Manage API tokens*) → **Create API token**.
2. Permisos: **Object Read & Write**. Alcance: **solo el bucket `kymsul-media`**. Sin fecha de expiración o con una lejana.
3. Al crearlo, Cloudflare muestra **una sola vez**: *Access Key ID* y *Secret Access Key*. También necesitas tu **Account ID** (aparece en la página de R2 / en la URL del panel).
4. En la carpeta `kymsul-portfolio/`, crea un archivo llamado `.env.local` (Git lo ignora) con este contenido, rellenando tus valores:

   ```
   R2_ACCOUNT_ID=tu_account_id
   R2_BUCKET=kymsul-media
   R2_ACCESS_KEY_ID=tu_access_key_id
   R2_SECRET_ACCESS_KEY=tu_secret_access_key
   ```

   No pongas todavía `NEXT_PUBLIC_MEDIA_BASE_URL` en este archivo: si lo haces antes de subir, la vista local dejará de mostrar imágenes.

Cuando tengas estos tres pasos, pídele a Codex que ejecute la **Parte 2**.

### 4. Configurar Vercel (después de que Codex confirme la subida)

1. Vercel → proyecto del portafolio → **Settings** → **Environment Variables**.
2. Añade `NEXT_PUBLIC_MEDIA_BASE_URL` = `https://media.kymsul.art` (sin `/media` al final) para **Production** y **Preview**.
3. Vuelve a desplegar (Deployments → Redeploy, o al subir la rama). Esta variable se incrusta al compilar: si la cambias, hay que volver a desplegar.
4. Revisa primero el despliegue de **Preview**; solo cuando todo se vea bien, publícalo en Production.

---

## Parte 2 · Instrucciones para Codex

Contexto: Next.js 16 en `kymsul-portfolio/`. Lee `AGENTS.md` y `MEDIA.md`. No hagas commit, push, reset ni limpieza destructiva sin que Kimberly lo pida. No borres `public/media/` ni los originales. No muestres en el chat los valores de `.env.local`.

Si `npm` no está en el PATH, usa el binario de Node disponible y ejecuta los scripts directamente (`node scripts/upload-media-r2.mjs …`).

1. **Comprobar credenciales sin mostrarlas.** Confirma que `kymsul-portfolio/.env.local` existe y define `R2_ACCOUNT_ID`, `R2_BUCKET`, `R2_ACCESS_KEY_ID` y `R2_SECRET_ACCESS_KEY` (solo comprobar que existen, sin imprimirlas). Confirma con `git check-ignore -v .env.local` que Git lo ignora.
2. **Prueba en seco:** `npm run media:upload:dry` → debe listar todos los archivos del manifiesto (usa la cifra que reporte `media:check`) bajo `media/`.
3. **Subida:** `npm run media:upload`. Sube cada archivo como `media/<hash>.<ext>` con su `Content-Type` y `Cache-Control: public, max-age=31536000, immutable`. Es reanudable: si se corta, vuelve a ejecutarlo; omite lo que ya está. Si informa «Different bytes already published», **detente y avisa**: no sobrescribas.
4. **Verificación remota:** `NEXT_PUBLIC_MEDIA_BASE_URL=https://media.kymsul.art npm run media:check` → debe decir `Verified N media files (CDN).` con el mismo número que la prueba en seco. Incluye la comprobación de «range requests» de video (respuesta 206).
5. **Build con el contenedor:** `NEXT_PUBLIC_MEDIA_BASE_URL=https://media.kymsul.art npm run build -- --webpack`. El `prebuild` vuelve a verificar los medios.
6. **Prueba visual local apuntando al contenedor:** arranca el sitio con esa misma variable y abre `/es`, `/`, `/es/proyectos`, `/es/proyectos/zealix`, `/es/ia`. Comprueba en la pestaña Red que las imágenes vienen de `media.kymsul.art`, que ningún MP4 se pide antes de pulsar «Reproducir», que los videos se reproducen y se pueden adelantar, y que no hay errores en consola.
7. **Informar a Kimberly** con el resultado y pedirle que haga el **paso 4 de la Parte 1** (variable en Vercel). Después de su despliegue de Preview, repetir la revisión del paso 6 sobre la URL de Preview.

---

## Añadir proyectos nuevos después de la migración

1. Coloca los originales en `projects/kymsul-renovacion/work/original-assets/<proyecto>/` (misma estructura que `/assets/...`).
2. Referencia las piezas en el código (`lib/projects.ts`) con rutas `/assets/<proyecto>/<archivo>`.
3. Genera las versiones web: `FFMPEG_PATH=/ruta/a/ffmpeg npm run media:prepare -- /ruta/absoluta/a/original-assets` y luego `npm run summaries`.
4. Sube solo lo nuevo: `npm run media:upload` (omite lo que ya existe).
5. `NEXT_PUBLIC_MEDIA_BASE_URL=https://media.kymsul.art npm run media:check`, build y despliegue.

## Si algo sale mal

- Para volver a servir los medios desde el proyecto (solo en local), quita `NEXT_PUBLIC_MEDIA_BASE_URL`. En Vercel no hay carpeta local de medios: la variable debe quedarse.
- No borres objetos del bucket durante un lanzamiento: los nombres llevan hash y las versiones anteriores pueden seguir en uso.
- Nunca subas `.env.local` a Git ni pegues las claves en un chat. Si una clave se filtra, revócala en Cloudflare y crea otra.
