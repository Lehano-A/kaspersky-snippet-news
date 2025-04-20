import React from 'react'
import { Button } from 'antd'

interface ButtonShowAllProps {
  numShow: number
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function ButtonShowAll({ numShow, handleClick }: ButtonShowAllProps) {
  return (
    <>
      <Button
        color="primary"
        variant="link"
        icon={`+${numShow}`}
        iconPosition="end"
        style={{ padding: 0, fontWeight: 300, marginBottom: '12px', margin: 0 }}
        size="small"
        onClick={handleClick}
        aria-label="Показать все теги"
      >
        Show All
      </Button>
    </>
  )
}

export default ButtonShowAll
