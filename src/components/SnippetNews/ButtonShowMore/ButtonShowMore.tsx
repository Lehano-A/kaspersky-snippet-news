import { Button } from 'antd'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'

function ButtonShowMore({
  needShowMore,
  handleClick
}: {
  needShowMore: boolean
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}) {
  return (
    <Button
      color="primary"
      variant="link"
      icon={
        needShowMore ? (
          <CaretUpOutlined style={{ fontSize: '12px' }} />
        ) : (
          <CaretDownOutlined style={{ fontSize: '12px' }} />
        )
      }
      iconPosition="end"
      style={{ padding: 0, fontWeight: 300, marginBottom: '12px' }}
      size="small"
      onClick={handleClick}
    >
      {needShowMore ? 'Show less' : 'Show more'}
    </Button>
  )
}

export default ButtonShowMore
