import { ComponentType } from 'react'

import { ConfigProvider } from 'antd'

function withChangedAntdStyle<T extends object>(
  Component: ComponentType<T>,
  style: { [key: string]: { [key: string]: string | number } }
) {
  return (hocProps: T) => {
    return (
      <ConfigProvider theme={{ components: style }}>
        <Component {...hocProps} />
      </ConfigProvider>
    )
  }
}

export default withChangedAntdStyle
