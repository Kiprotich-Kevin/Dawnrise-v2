import useReveal from '../hooks/useReveal'

export default function Reveal({ children, className = '', as: Component = 'div', delay = 0 }) {
  const [ref, isVisible] = useReveal()

  return (
    <Component
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Component>
  )
}
