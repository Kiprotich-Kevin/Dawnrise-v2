import Container from './Container'

const ACCENTS = {
  primary: 'bg-primary-light text-primary',
  navy: 'bg-surface-navy text-primary',
  red: 'bg-accent-red/15 text-accent-red',
}

const POSTS = [
  {
    image: 'https://picsum.photos/seed/educatex-blog-1/500/360',
    avatarSeed: 'educatex-testimonial-1',
    author: 'John D. Alexon',
    title: '10 Proven Strategies to excel Online Learning',
    tag: 'Learning Method',
    accent: 'primary',
  },
  {
    image: 'https://picsum.photos/seed/educatex-blog-2/500/360',
    avatarSeed: 'educatex-testimonial-2',
    author: 'Angelina Watson',
    title: 'Trends that are shaping the Learning experience',
    tag: 'Learning Skills',
    accent: 'navy',
  },
  {
    image: 'https://picsum.photos/seed/educatex-blog-3/500/360',
    avatarSeed: 'educatex-blog-author-3',
    author: 'David S. Barnes',
    title: 'Learning in the Key soft skills and Professional',
    tag: 'Professional Skills',
    accent: 'red',
  },
]

export default function BlogSection() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <div className="mb-10 grid items-center gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-6 shrink-0 bg-primary" />
            <span className="whitespace-nowrap text-xs font-bold uppercase tracking-wide text-primary">
              Latest Blog
            </span>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl">
            Read the Latest Insights and Updates Dawnrise Blog
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map(({ image, avatarSeed, author, title, tag, accent }) => (
            <div key={title} className="overflow-hidden rounded-2xl bg-surface shadow-lg">
              <div className="relative">
                <img src={image} alt={title} className="h-44 w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <img
                    src={`https://picsum.photos/seed/${avatarSeed}/64/64`}
                    alt={author}
                    className="h-6 w-6 rounded-full border border-white/50 object-cover"
                  />
                  <span className="text-xs font-bold text-white">{author}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold leading-snug text-text-primary">{title}</h3>
                <span
                  className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-bold ${ACCENTS[accent]}`}
                >
                  {tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
