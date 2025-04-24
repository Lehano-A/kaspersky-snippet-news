import React, { lazy, useMemo } from 'react'
import Checkbox, { CheckboxChangeEvent } from 'antd/es/checkbox/Checkbox'
import withChangedAntdStyle from '../../../HOC/withChangedAntdStyle'
import { Button } from 'antd'
import { borderSecondary, secondaryMainText } from '../../../scss/palette/_palette.module.scss'
import { borderPrimary } from '../../../scss/palette/_palette.module.scss'
import { HeaderNewsProps } from '../HeaderNews'
import { InfoOutlined } from '@ant-design/icons'
import { IData_SnippetNews } from '../../../assets/data/dataNews.types'
import { SnippetNewsProps } from '@/components/SnippetNews/SnippetNews'

const Popover = lazy(() => import('antd/es/popover'))

interface ToolbarProps {
  miniMode?: HeaderNewsProps['miniMode']
  SENT: IData_SnippetNews['SENT']
  checkboxId: HeaderNewsProps['checkboxId']
  setterMarkedNews: SnippetNewsProps['setterMarkedNews']
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

const Toolbar = React.memo(({ miniMode, SENT, checkboxId, setterMarkedNews }: ToolbarProps) => {
  const StyledButtonInfo = useMemo(() => withChangedAntdStyle(Button, styleButton), [])
  const classBgSentiment = useMemo(
    () =>
      SENT === 'positive' ? 'header-news__sentiment--positive' : 'header-news__sentiment--negative',
    []
  )

  // обработать тоггл мини-новости
  function handleToggle(e: CheckboxChangeEvent) {
    const id = e.target.id
    const isChecked = e.target.checked

    if (id) {
      if (isChecked) {
        setterMarkedNews((prevState) => [...prevState, id])
      }

      if (!isChecked) {
        setterMarkedNews((prevState) => {
          return prevState.filter((item) => item !== id)
        })
      }
    }
  }

  return (
    <div className="header-news__toolbar">
      {!miniMode && <span className={`header-news__sentiment ${classBgSentiment}`}>{SENT}</span>}

      <Popover
        color={borderSecondary}
        title={<span className="header-news__popover-text">Some info</span>}
      >
        <StyledButtonInfo className="header-news__btn-info">
          <InfoOutlined style={{ color: secondaryMainText }} />
        </StyledButtonInfo>
      </Popover>

      <Checkbox
        id={checkboxId}
        className="header-news__select"
        onChange={handleToggle}
      />
    </div>
  )
})

export default Toolbar
