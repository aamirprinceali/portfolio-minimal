import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ChapterSection from '../ui/ChapterSection'
import ChapterHeader from '../ui/ChapterHeader'
import Tilt3D from '../ui/Tilt3D'
import { projects } from '../../data/projects'

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easing } } }

export default function ChapterWork() {
  return (
    <ChapterSection id="chapter-work" backgroundColor="#FDFCF8">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '96px 24px 80px' }}>
        <ChapterHeader
          number="03"
          chapter="The Portfolio"
          headline="Real problems.<br/>Real solutions."
          deck="Each project is something built or a workflow designed to solve a specific need."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '16px',
          }}
        >
          {projects.map(({ id, title, description, tags, status, githubUrl }) => (
            <motion.div key={id} variants={item} style={{ display: 'contents' }}>
            <Tilt3D
              className="gold-glow"
              intensity={5}
              style={{
                position: 'relative',
                backgroundColor: '#F5F2EA',
                border: '1px solid #E2DCCF',
                borderRadius: '4px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                overflow: 'hidden',
                transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)'
                const accent = e.currentTarget.querySelector('.card-accent') as HTMLDivElement
                if (accent) accent.style.opacity = '1'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.borderColor = '#E2DCCF'
                e.currentTarget.style.boxShadow = 'none'
                const accent = e.currentTarget.querySelector('.card-accent') as HTMLDivElement
                if (accent) accent.style.opacity = '0'
              }}
            >
              {/* Gold left-edge accent on hover */}
              <div
                className="card-accent"
                style={{
                  position: 'absolute',
                  left: 0, top: '16px', bottom: '16px',
                  width: '2px',
                  backgroundColor: '#C9A84C',
                  borderRadius: '0 2px 2px 0',
                  opacity: 0,
                  transition: 'opacity 0.25s',
                }}
              />

              {/* Project number + status */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  color: '#C9A84C',
                }}>
                  {String(id).padStart(2, '0')}
                </span>
                <span style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '0.65rem', fontWeight: 500,
                  letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                  color: status === 'Completed' ? '#2D6A4F' : '#7A7060',
                  backgroundColor: status === 'Completed' ? 'rgba(45,106,79,0.08)' : 'rgba(122,112,96,0.1)',
                  border: `1px solid ${status === 'Completed' ? 'rgba(45,106,79,0.2)' : '#E2DCCF'}`,
                  borderRadius: '2px',
                  padding: '3px 8px',
                }}>
                  {status}
                </span>
              </div>

              {/* Title */}
              <div style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '1.35rem',
                fontWeight: 600,
                color: '#0F0F0E',
                lineHeight: 1.15,
              }}>
                {title}
              </div>

              {/* Description */}
              <p style={{
                fontFamily: '"Lora", Georgia, serif',
                fontSize: '0.82rem',
                color: '#7A7060',
                lineHeight: 1.7,
                flex: 1,
              }}>
                {description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '0.7rem',
                    color: '#7A7060', backgroundColor: '#FDFCF8',
                    border: '1px solid #E2DCCF', borderRadius: '2px',
                    padding: '2px 8px',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                    fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 500,
                    color: '#C9A84C', textDecoration: 'none',
                    borderBottom: '1px solid rgba(201,168,76,0.3)',
                    paddingBottom: '1px',
                    width: 'fit-content',
                  }}
                >
                  View on GitHub <ArrowUpRight size={12} />
                </a>
              )}
            </Tilt3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ChapterSection>
  )
}
