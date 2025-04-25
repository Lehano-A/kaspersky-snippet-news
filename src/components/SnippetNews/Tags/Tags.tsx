import { useEffect, useState } from 'react'
import { IData_TagItem } from '../../../assets/data/dataNews.types'
import { Tag } from 'antd'
import palette from '../../../scss/palette/_palette.module.scss'
import ButtonShowAll from '../ButtonShowAll/ButtonShowAll'
import extractElement from '../../../utils/extractElement'

interface TagsProps {
  tags: IData_TagItem[]
}

const tagStyle = {
  backgroundColor: 'transparent',
  borderRadius: '15px',
  borderColor: palette.borderSecondaryAlpha30,
  color: palette.secondaryMainText,
  paddingInline: '0',
  padding: '2px 10px'
}

function Tags({ tags }: TagsProps) {
  const [limitVisible, setLimitVisible] = useState(2)
  const [extractedTags, setExtractedTags] = useState<IData_TagItem[]>([])

  useEffect(() => {
    const extracted = extractElement(tags, 0, limitVisible)
    setExtractedTags(extracted)
  }, [limitVisible])

  // обработать клик по кнопке "Показать все"
  function handleClickShowAll() {
    setLimitVisible(tags.length)
  }

  return (
    <div>
      {extractedTags.map((tag, id) => {
        const { value, count } = tag

        return (
          <Tag
            key={id}
            style={tagStyle}
          >
            <span className="mr-7">{value}</span>
            <span className="text--primary">{count}</span>
          </Tag>
        )
      })}

      {tags.length > limitVisible && (
        <ButtonShowAll
          handleClick={handleClickShowAll}
          numShow={tags.length - limitVisible}
        />
      )}
    </div>
  )
}

export default Tags
