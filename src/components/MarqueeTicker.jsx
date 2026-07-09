import { Sparkle } from 'lucide-react'

const ITEMS = ['Wide Learners', 'Unique Knowledge', 'Dream Today', 'Learning Innovation']

export default function MarqueeTicker() {
  return (
    <div className="relative overflow-hidden bg-primary-dark py-5">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="absolute inset-0 bg-primary/75" />

      <div className="relative flex w-max animate-marquee">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="flex items-center gap-3 px-6 text-xs font-bold uppercase tracking-wide text-white">
            {item}
            <Sparkle className="h-3 w-3 shrink-0 fill-accent-gold text-accent-gold" />
          </span>
        ))}
      </div>
    </div>
  )
}
