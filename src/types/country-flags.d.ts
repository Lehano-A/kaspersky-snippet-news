declare module 'react-country-flag' {
  import { FC, SVGProps } from 'react'

  interface ReactCountryFlagProps extends SVGProps<SVGSVGElement> {
    countryCode: string
    svg?: boolean
    cdnUrl?: string
    cdnSuffix?: string
    style?: React.CSSProperties
  }

  const ReactCountryFlag: FC<ReactCountryFlagProps>
  export default ReactCountryFlag
}
