import global from './scss/core/_global.module.scss'
import palette from './scss/palette/_palette.module.scss'

const themeAntd = {
  token: {
    fontFamily: global.baseFontFamily,
    colorPrimary: global.accentMain,
    colorText: global.secondaryMainText
  },
  components: {
    Checkbox: {
      lineWidth: 2,
      borderRadiusSM: 0,
      colorBgContainer: 'transparent',
      colorPrimary: palette.borderPrimary,
      colorBorder: palette.borderPrimary,
      colorPrimaryHover: palette.borderPrimary
    },

    Typography: {
      colorLink: palette.accentMain
    },

    Dropdown: {
      colorPrimary: palette.accentMain,
      colorBgElevated: palette.secondaryMainText,
      colorText: palette.primaryMainText
    }
  }
}

export default themeAntd
