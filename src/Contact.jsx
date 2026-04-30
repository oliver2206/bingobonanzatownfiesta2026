import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', services: [] })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const toggleService = (s) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter(x => x !== s)
        : [...prev.services, s]
    }))
  }

  const handleSend = () => {
    if (!formData.name || !formData.email) return
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setFormData({ name: '', email: '', message: '', services: [] })
    }, 3000)
  }

  return (
    <div className="page-wrapper" style={{
      background: 'radial-gradient(ellipse at 50% 100%, rgba(41,121,255,0.07) 0%, transparent 60%), #080810',
      color: '#e0e8ff', position: 'relative', overflow: 'hidden',
    }}>
      {/* Particle line background */}
      <svg style={{
        position: 'fixed', inset: 0, width: '100%', height: '100%',
        opacity: 0.12, pointerEvents: 'none', zIndex: 0,
      }}>
        {[
          [5, 15, 45, 85], [80, 5, 20, 70], [10, 40, 75, 60],
          [60, 80, 90, 20], [30, 10, 70, 90], [15, 65, 85, 35],
          [50, 5, 10, 95], [90, 50, 30, 30],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i}
            x1={`${x1}%`} y1={`${y1}%`}
            x2={`${x2}%`} y2={`${y2}%`}
            stroke="#2979ff" strokeWidth="0.8"
          />
        ))}
        {[
          [15, 20], [80, 15], [45, 80], [70, 45], [25, 65], [88, 75]
        ].map(([cx, cy], i) => (
          <circle key={`c${i}`} cx={`${cx}%`} cy={`${cy}%`} r="3" fill="rgba(41,121,255,0.5)" />
        ))}
      </svg>

      <div className="page-hero-banner" style={{ position: 'relative', zIndex: 1 }}>
        <h1>Contact</h1>
        <p>Have a project in mind? Let's talk about it</p>
      </div>

      <div style={{
        maxWidth: '1100px', margin: '0 auto', padding: '70px 5%',
        display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '60px',
        position: 'relative', zIndex: 1,
      }}>
        {/* Left: Contact Info */}
        <div style={{ animation: 'slideInLeft 0.7s ease forwards' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#e0e8ff', marginBottom: '16px' }}>
            Let's connect
          </h2>
          <p style={{ color: '#8898aa', lineHeight: 1.8, marginBottom: '40px', fontSize: '0.92rem' }}>
            I'm always open to new opportunities and collaborations. Whether you need a logo, website, or photo editing — reach out!
          </p>

          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '44px' }}>
            {[
              { icon: '📍', label: 'Location', val: 'Magsingal, Ilocos Sur, Philippines' },
              { icon: '✉️', label: 'Email', val: 'your@email.com' },
              { icon: '📱', label: 'Phone', val: '+63 9XX XXX XXXX' },
              { icon: '⏰', label: 'Availability', val: 'Mon – Sat, 9am – 6pm PHT' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', gap: '16px', alignItems: 'flex-start',
                padding: '16px 20px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(41,121,255,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}>
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ color: '#2979ff', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {item.label}
                  </p>
                  <p style={{ color: '#a0b4d0', fontSize: '0.88rem' }}>{item.val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <p style={{ color: '#4a5568', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Find me on
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { label: 'FB', icon: '📘' },
                { label: 'IG', icon: '📷' },
                { label: 'LI', icon: '💼' },
                { label: 'GH', icon: '🐙' },
              ].map(s => (
                <button key={s.label} style={{
                  width: '44px', height: '44px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer', fontSize: '1.2rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(41,121,255,0.15)'
                  e.currentTarget.style.borderColor = 'rgba(41,121,255,0.4)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                  {s.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px',
          padding: '48px 44px',
          backdropFilter: 'blur(10px)',
          animation: 'slideInRight 0.7s ease forwards',
        }}>
          <h2 style={{
            textAlign: 'center', fontSize: '1.6rem', fontWeight: 700,
            color: '#e0e8ff', marginBottom: '36px', fontStyle: 'italic',
          }}>
            Don't be shy, write to us
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', color: '#a0b4d0', fontSize: '0.82rem', fontWeight: 600, marginBottom: '8px' }}>
                Name *
              </label>
              <input
                className="input-field"
                placeholder="Full name"
                value={formData.name}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                style={{ borderColor: focused === 'name' ? '#2979ff' : 'rgba(255,255,255,0.12)' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: '#a0b4d0', fontSize: '0.82rem', fontWeight: 600, marginBottom: '8px' }}>
                Email *
              </label>
              <input
                className="input-field"
                placeholder="Email address"
                value={formData.email}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                style={{ borderColor: focused === 'email' ? '#2979ff' : 'rgba(255,255,255,0.12)' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', color: '#a0b4d0', fontSize: '0.82rem', fontWeight: 600, marginBottom: '8px' }}>
              How can we help?
            </label>
            <textarea
              className="input-field"
              placeholder="Tell us about the project..."
              rows={5}
              style={{ resize: 'vertical', borderColor: focused === 'msg' ? '#2979ff' : 'rgba(255,255,255,0.12)' }}
              value={formData.message}
              onFocus={() => setFocused('msg')}
              onBlur={() => setFocused(null)}
              onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
            />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', color: '#a0b4d0', fontSize: '0.82rem', fontWeight: 600, marginBottom: '14px' }}>
              Services *
            </label>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {['Branding', 'Digital Experiences', 'Web Development'].map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                  onClick={() => toggleService(s)}>
                  <div className={`checkbox-custom ${formData.services.includes(s) ? 'checked' : ''}`} />
                  <span style={{ color: '#a0b4d0', fontSize: '0.85rem' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              className="btn-outline"
              style={{
                minWidth: '200px',
                background: sent ? 'rgba(41,121,255,0.15)' : 'transparent',
                borderColor: sent ? '#2979ff' : 'rgba(255,255,255,0.3)',
                color: sent ? '#2979ff' : '#e0e8ff',
              }}
              onClick={handleSend}
            >
              {sent ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
