import { useState } from 'react'

const GALLERY_ITEMS = [
  { emoji: '📸', label: 'Portrait Retouch', tag: 'Photo Editing', span: 'tall' },
  { emoji: '🌅', label: 'Landscape Edit', tag: 'Lightroom', span: '' },
  { emoji: '🎭', label: 'Triple Exposure', tag: 'Photo Editing', span: '' },
  { emoji: '☕', label: 'Product Shot', tag: 'Commercial', span: 'wide' },
  { emoji: '🌃', label: 'Night Photography', tag: 'Lightroom', span: '' },
  { emoji: '🎨', label: 'Color Grading', tag: 'Post-Processing', span: 'tall' },
  { emoji: '👤', label: 'Fashion Edit', tag: 'Retouching', span: '' },
  { emoji: '🏙️', label: 'Urban Scene', tag: 'Lightroom', span: '' },
  { emoji: '🌸', label: 'Nature Close-up', tag: 'Photo Editing', span: '' },
  { emoji: '🎬', label: 'Cinematic Grade', tag: 'Color Grading', span: 'wide' },
  { emoji: '✨', label: 'Light Painting', tag: 'Creative', span: '' },
  { emoji: '🖼️', label: 'Composite Work', tag: 'Photo Editing', span: '' },
]

const FILTERS = ['All', 'Photo Editing', 'Lightroom', 'Retouching', 'Color Grading', 'Creative', 'Commercial']

export default function Gallery() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.tag === filter)

  return (
    <div className="page-wrapper" style={{ background: '#050508', color: '#e0e8ff' }}>
      <div className="page-hero-banner">
        <h1>Gallery</h1>
        <p>A visual showcase of my photo editing & retouching work</p>
      </div>

      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '60px 5%' }}>
        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '48px', justifyContent: 'center' }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '8px 20px', borderRadius: '50px',
              border: f === filter ? 'none' : '1px solid rgba(255,255,255,0.15)',
              background: f === filter ? '#2979ff' : 'transparent',
              color: f === filter ? 'white' : '#90b8ff',
              fontSize: '0.83rem', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.3s', letterSpacing: '0.03em',
            }}>
              {f}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '200px',
          gap: '16px',
        }}>
          {filtered.map((item, i) => (
            <div key={`${filter}-${i}`} style={{
              gridRow: item.span === 'tall' ? 'span 2' : 'span 1',
              gridColumn: item.span === 'wide' ? 'span 2' : 'span 1',
              background: `linear-gradient(135deg, hsl(${210 + i * 18}, 55%, ${8 + i * 2}%) 0%, #0a0a14 100%)`,
              borderRadius: '14px',
              border: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: '12px',
              cursor: 'pointer', transition: 'all 0.4s',
              position: 'relative', overflow: 'hidden',
              animation: `fadeUp 0.4s ease ${i * 0.07}s both`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.02)'
              e.currentTarget.style.borderColor = 'rgba(41,121,255,0.5)'
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(41,121,255,0.15)'
              const info = e.currentTarget.querySelector('.gallery-info')
              if (info) { info.style.opacity = '1'; info.style.transform = 'translateY(0)' }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.boxShadow = 'none'
              const info = e.currentTarget.querySelector('.gallery-info')
              if (info) { info.style.opacity = '0'; info.style.transform = 'translateY(10px)' }
            }}>
              <div style={{ fontSize: item.span === 'tall' ? '4rem' : '2.8rem' }}>{item.emoji}</div>
              <div className="gallery-info" style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(41,121,255,0.9) 0%, transparent 100%)',
                padding: '24px 16px 16px',
                opacity: 0, transform: 'translateY(10px)', transition: 'all 0.3s',
              }}>
                <p style={{ color: 'white', fontWeight: 700, fontSize: '0.88rem' }}>{item.label}</p>
                <span style={{
                  background: 'rgba(255,255,255,0.2)', color: 'white',
                  padding: '2px 8px', borderRadius: '50px', fontSize: '0.72rem',
                  marginTop: '4px', display: 'inline-block',
                }}>{item.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px', color: '#4a5568' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
            <p>No items found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
