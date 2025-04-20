interface TitleProps {
  children: string
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  className?: string
}

function Title({ children, variant, className = 'title' }: TitleProps) {
  const Tag = variant

  return <Tag className={className}>{children}</Tag>
}

export default Title
