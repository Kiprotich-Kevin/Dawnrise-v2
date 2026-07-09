import { Leaf, Square, Diamond } from 'lucide-react'
import Container from './Container'

const PARTNERS = [
  { name: 'paloalto', icon: Leaf },
  { name: 'datab', icon: Square },
  { name: 'Aderant', icon: null },
  { name: 'NOVOLEX', icon: Diamond },
]

export default function PartnerLogos() {
  return (
    <section className="bg-surface-navy py-10">
      <Container className="flex flex-wrap items-center justify-around gap-8">
        {PARTNERS.map(({ name, icon: Icon }) => (
          <div key={name} className="flex items-center gap-2 text-text-primary/70">
            {Icon && <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />}
            <span className="text-lg font-bold tracking-tight">{name}</span>
          </div>
        ))}
      </Container>
    </section>
  )
}
