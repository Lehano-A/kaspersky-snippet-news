import palette from '../../../scss/palette/_palette.module.scss'
import { lazy } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { MenuProps, Typography } from 'antd'
import { SortedBy } from '../Duplicates'

const Dropdown = lazy(() => import('antd/es/dropdown'))

export const BY_RELEVANCE = 'By Relevance'
export const BY_DATE = 'By Date'

const items = [
  { key: '0', label: BY_RELEVANCE },
  { key: '1', label: BY_DATE }
]

interface ButtonSortProps {
  sortedBy: SortedBy
  setSortedBy: React.Dispatch<React.SetStateAction<SortedBy>>
}

function ButtonSort({ sortedBy, setSortedBy }: ButtonSortProps) {
  // обработать выбор сортировки
  const handleSelectSort: MenuProps['onSelect'] = (e) => {
    const key = Number(e.key)
    const sortBy = items[key].label

    if (sortBy === BY_RELEVANCE || sortBy === BY_DATE) {
      setSortedBy(sortBy)
    }
  }

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: ['0'],
        onSelect: handleSelectSort
      }}
      aria-label="Сортировать дублированные новости"
    >
      <Typography.Link style={{ color: palette.secondaryMainText }}>
        <span className="mr-8">{sortedBy}</span>
        <DownOutlined style={{ color: palette.primaryMainText, fontSize: '1.3rem' }} />
      </Typography.Link>
    </Dropdown>
  )
}

export default ButtonSort
