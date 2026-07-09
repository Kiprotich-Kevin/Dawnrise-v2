const variants = {
  filled: 'bg-primary text-text-inverse hover:bg-primary-dark',
  outline: 'border border-border text-text-primary hover:border-primary',
  ghost: 'border border-white/40 text-white hover:bg-white/10',
}

export default function Button({ as: Component = 'button', variant = 'filled', className = '', children, ...props }) {
  return (
    <Component
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
