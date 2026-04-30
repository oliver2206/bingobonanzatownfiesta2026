import { TESTIMONIALS } from './shared'

const ALL_TESTIMONIALS = [
  ...TESTIMONIALS,
  { name: 'Carlo Bautista', role: 'Milk Tea Shop Owner', text: 'The menu design Nathaniel made for us is absolutely stunning. Our customers always ask about it!' },
  { name: 'Liza Fernandez', role: 'Event Organizer', text: 'Professional, creative, and always delivers on time. Very satisfied with the poster designs.' },
  { name: 'Ryan Mendoza', role: 'YouTube Creator', text: 'His Lightroom edits and thumbnail work elevated my content quality significantly.' },
]

export default function Testimonials() {
  return (
    <div className="page-wrapper" style={{ background: '#050508', color: '#e0e8ff' }}>
      <div className="page-hero-banner">
        <h1>Testimonials</h1>
        <p>What my clients say about working with me</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 5%' }}>
        {/* Stats strip */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '60px',
          marginBottom: '72px',
          padding: '32px',
          background: 'rgba(41,121,255,0.05)',
          borderRadius: '16px',
          border: '1px solid rgba(41,121,255,0.12)',
        }}>
          {[
            { val: '30+', label: 'Happy Clients' },
            { val: '5.0', label: 'Average Rating' },
            { val: '100%', label: 'Satisfaction Rate' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#2979ff' }}>{s.val}</div>
              <div style={{ color: '#8898aa', fontSize: '0.82rem', marginTop: '6px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {ALL_TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card" style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Quote mark */}
              <div style={{ fontSize: '3rem', lineHeight: 1, color: '#2979ff', marginBottom: '16px', opacity: 0.6 }}>"</div>

              <p style={{
                color: '#8898aa', lineHeight: 1.85, fontSize: '0.9rem',
                marginBottom: '28px', fontStyle: 'italic',
              }}>
                {t.text}
              </p>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                {/* Avatar */}
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: `linear-gradient(135deg, hsl(${220 + i * 25}, 80%, 50%), hsl(${200 + i * 25}, 70%, 35%))`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 700, fontSize: '1.1rem',
                  flexShrink: 0,
                  boxShadow: '0 4px 15px rgba(41,121,255,0.3)',
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <p style={{ color: '#e0e8ff', fontWeight: 700, fontSize: '0.92rem' }}>{t.name}</p>
                  <p style={{ color: '#2979ff', fontSize: '0.78rem', marginTop: '2px' }}>{t.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div style={{ marginTop: '18px', display: 'flex', gap: '3px' }}>
                {[...Array(5)].map((_, si) => (
                  <span key={si} style={{ color: '#ffd700', fontSize: '1rem' }}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center', marginTop: '72px',
          padding: '56px',
          background: 'linear-gradient(135deg, rgba(41,121,255,0.08) 0%, transparent 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(41,121,255,0.12)',
        }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#e0e8ff', marginBottom: '12px' }}>
            Ready to work together?
          </h3>
          <p style={{ color: '#8898aa', marginBottom: '28px', fontSize: '0.95rem' }}>
            Let's create something amazing. I'd love to hear about your project.
          </p>
          <button className="btn-primary" style={{ fontSize: '1rem', padding: '14px 36px' }}>
            Get In Touch ✉️
          </button>
        </div>
      </div>
    </div>
  )
}
