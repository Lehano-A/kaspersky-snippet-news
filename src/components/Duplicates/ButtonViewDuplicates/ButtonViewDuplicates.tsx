import withChangedAntdStyle from '../../../HOC/withChangedAntdStyle'
import palette from '../../../scss/palette/_palette.module.scss'
import { Button } from 'antd'
import { useMemo } from 'react'
import { DownOutlined } from '@ant-design/icons'

interface ButtonViewDuplicatesProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const styleButton = {
  Button: {
    defaultGhostBorderColor: palette.borderPrimary,
    fontWeight: 200,
    fontSize: '1.6rem',
    letterSpacing: 3
  }
}

function ButtonViewDuplicates({ handleClick }: ButtonViewDuplicatesProps) {
  const StyledButtonViewDuplicates = useMemo(() => withChangedAntdStyle(Button, styleButton), [])

  return (
    <StyledButtonViewDuplicates
      icon={<DownOutlined />}
      block
      ghost
      size="large"
      onClick={handleClick}
    >
      View Duplicates
    </StyledButtonViewDuplicates>
  )
}

export default ButtonViewDuplicates
