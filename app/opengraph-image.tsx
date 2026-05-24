import { ImageResponse } from 'next/og'

export const alt = 'Kimberly Tapia Rubio — Brand & Content Designer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0D0D0D',
          color: '#FFFFFF',
          padding: 72,
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 4,
            color: '#CDBDFF',
            textTransform: 'uppercase',
          }}
        >
          kymsul.art
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 86,
              lineHeight: 0.95,
              fontWeight: 700,
              maxWidth: 940,
            }}
          >
            Kimberly Tapia Rubio
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.25,
              color: '#EDE8FF',
              maxWidth: 900,
            }}
          >
            Brand & Content Designer
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 22,
            fontSize: 24,
            color: '#BFB8AD',
          }}
        >
          <span>Visual Systems</span>
          <span>Motion</span>
          <span>AI-Native Workflows</span>
        </div>
      </div>
    ),
    size
  )
}
