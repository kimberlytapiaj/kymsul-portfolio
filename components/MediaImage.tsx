import type { CSSProperties, ImgHTMLAttributes } from 'react'
import { deliveryUrl, mediaAsset, mediaUrl } from '@/lib/media'
type Props = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'width' | 'height'
> & {
  src: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  quality?: number
}
export default function MediaImage({
  src,
  alt,
  fill,
  priority,
  quality: _quality,
  width,
  height,
  sizes,
  className,
  style,
  ...props
}: Props) {
  const asset = mediaAsset(src)
  const layout: CSSProperties = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%' }
    : {}
  return (
    <img
      {...props}
      src={mediaUrl(src)}
      srcSet={asset?.variants
        ?.map((v) => `${deliveryUrl(v.src)} ${v.width}w`)
        .join(', ')}
      sizes={sizes || '(max-width: 768px) 100vw, 50vw'}
      alt={alt}
      width={width || asset?.width}
      height={height || asset?.height}
      loading={priority ? 'eager' : props.loading || 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={className}
      style={{ ...layout, ...style }}
    />
  )
}
