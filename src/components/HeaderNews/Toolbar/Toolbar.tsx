import React, { lazy, useMemo } from 'react'
import Checkbox from 'antd/es/checkbox/Checkbox'
import withChangedAntdStyle from '../../../HOC/withChangedAntdStyle'
import { Button } from 'antd'
import { borderSecondary, secondaryMainText } from '../../../scss/palette/_palette.module.scss'
import { borderPrimary } from '../../../scss/palette/_palette.module.scss'
import { HeaderNewsProps } from '../HeaderNews'
import { InfoOutlined } from '@ant-design/icons'
import { IData_SnippetNews } from '../../../assets/data/dataNews.types'

const Popover = lazy(() => import('antd/es/popover'))

interface ToolbarProps {
  miniMode?: HeaderNewsProps['miniMode']
  SENT: IData_SnippetNews['SENT']
}

const styleButton = {
  Button: {
    borderRadius: 0,
    lineWidth: 2,
    colorBgContainer: 'transparent',
    colorBorder: borderPrimary,
    defaultColor: borderPrimary,
    colorPrimaryHover: borderSecondary,
    defaultHoverColor: borderSecondary,
    defaultActiveColor: borderSecondary,
    defaultActiveBorderColor: borderSecondary
  }
}

const Toolbar = React.memo(({ miniMode, SENT }: ToolbarProps) => {
  const StyledButtonInfo = useMemo(() => withChangedAntdStyle(Button, styleButton), [])

  return (
    <div className="header-news__toolbar">
      {!miniMode && (
        <span className="header-news__sentiment header-news__sentiment--negative">{SENT}</span>
      )}

      <Popover
        color={borderSecondary}
        title={<span className="header-news__popover-text">Some info</span>}
      >
        <StyledButtonInfo className="header-news__btn-info">
          <InfoOutlined style={{ color: secondaryMainText }} />
        </StyledButtonInfo>
      </Popover>

      <Checkbox className="header-news__select" />
    </div>
  )
})

export default Toolbar
