import { EXPERIENCES } from './shared'

const TOOLS = [
  { name: 'Adobe Photoshop', level: 90, icon: '🎨' },
  { name: 'Adobe Lightroom', level: 85, icon: '📷' },
  { name: 'Adobe Illustrator', level: 75, icon: '✏️' },
  { name: 'HTML & CSS', level: 88, icon: '🌐' },
  { name: 'JavaScript', level: 72, icon: '⚡' },
  { name: 'React', level: 65, icon: '⚛️' },
]

export default function Experience() {
  return (
    <div className="page-wrapper" style={{ background: '#080810', color: '#e0e8ff' }}>
      <div className="page-hero-banner">
        <h1>Experience</h1>
        <p>My professional journey and technical expertise</p>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>

          {/* Timeline */}
          <div>
            <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Work History</h2>
            <div className="section-divider" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {EXPERIENCES.map((exp, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '24px',
                  paddingBottom: i < EXPERIENCES.length - 1 ? '40px' : '0',
                  animation: `fadeUp 0.5s ease ${i * 0.15}s both`,
                }}>
                  {/* Line + dot */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      width: '18px', height: '18px', borderRadius: '50%',
                      background: '#2979ff',
                      border: '4px solid rgba(41,121,255,0.25)',
                      flexShrink: 0, marginTop: '6px',
                      boxShadow: '0 0 12px rgba(41,121,255,0.5)',
                    }} />
                    {i < EXPERIENCES.length - 1 && (
                      <div style={{
                        width: '2px', flex: 1,
                        background: 'linear-gradient(to bottom, rgba(41,121,255,0.5), rgba(41,121,255,0.1))',
                        marginTop: '8px',
                      }} />
                    )}
                  </div>

                  {/* Card */}
                  <div style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '14px',
                    padding: '22px 24px',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(41,121,255,0.3)'
                    e.currentTarget.style.background = 'rgba(41,121,255,0.04)'
                    e.currentTarget.style.transform = 'translateX(6px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}>
                    <span style={{
                      background: 'rgba(41,121,255,0.15)', color: '#2979ff',
                      padding: '3px 12px', borderRadius: '50px',
                      fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em',
                    }}>{exp.year}</span>
                    <h3 style={{ color: '#e0e8ff', marginTop: '12px', fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>
                      {exp.role}
                    </h3>
                    <p style={{ color: '#2979ff', fontSize: '0.82rem', marginBottom: '12px', fontWeight: 600 }}>
                      {exp.company}
                    </p>
                    <p style={{ color: '#8898aa', lineHeight: 1.75, fontSize: '0.88rem' }}>{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Skills & Tools</h2>
            <div className="section-divider" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {TOOLS.map((tool, i) => (
                <div key={tool.name} style={{ animation: `fadeUp 0.5s ease ${i * 0.1}s both` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.2rem' }}>{tool.icon}</span>
                      <span style={{ color: '#e0e8ff', fontWeight: 600, fontSize: '0.9rem' }}>{tool.name}</span>
                    </div>
                    <span style={{ color: '#2979ff', fontWeight: 700, fontSize: '0.85rem' }}>{tool.level}%</span>
                  </div>
                  <div style={{
                    height: '8px', background: 'rgba(255,255,255,0.06)',
                    borderRadius: '50px', overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%', width: `${tool.level}%`,
                      background: 'linear-gradient(90deg, #2979ff, #64b5f6)',
                      borderRadius: '50px',
                      boxShadow: '0 0 10px rgba(41,121,255,0.4)',
                      transition: 'width 1s ease',
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications / extras */}
            <div style={{ marginTop: '48px' }}>
              <h3 style={{ color: '#90b8ff', fontSize: '1rem', fontWeight: 700, marginBottom: '20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                What I Do
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  { icon: '🖼️', label: 'Photo Retouching' },
                  { icon: '🎨', label: 'Logo Design' },
                  { icon: '🌐', label: 'Web Development' },
                  { icon: '📱', label: 'Responsive Design' },
                  { icon: '🌈', label: 'Color Grading' },
                  { icon: '🖌️', label: 'UI/UX Design' },
                ].map(item => (
                  <div key={item.label} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '12px 16px',
                    background: 'rgba(41,121,255,0.05)',
                    border: '1px solid rgba(41,121,255,0.12)',
                    borderRadius: '10px',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(41,121,255,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(41,121,255,0.12)'}>
                    <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                    <span style={{ color: '#a0b4d0', fontSize: '0.83rem', fontWeight: 500 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
