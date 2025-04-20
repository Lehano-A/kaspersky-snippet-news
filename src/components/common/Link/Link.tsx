import AntdLink from 'antd/es/typography/Link'
import palette from '../../../scss/palette/_palette.module.scss'

interface LinkProps {
  children: string
  href: string
  underline?: boolean
}

function Link({ children, href, underline }: LinkProps) {
  const styleUnderline = {
    textDecoration: `${underline ? `underline 2px ${palette.underlineLink}` : 'none'}`,
    textUnderlineOffset: '4px',
    fontWeight: 300
  }

  return (
    <AntdLink
      style={styleUnderline}
      href={`http://${href}`}
      target="_blank"
      className="link"
    >
      {children}
    </AntdLink>
  )
}

export default Link
