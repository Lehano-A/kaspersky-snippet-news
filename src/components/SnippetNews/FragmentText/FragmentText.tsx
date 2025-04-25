import { useMemo } from 'react'
import extractElement from '../../../utils/extractElement'
import { parseText } from './utils/fragmentTextUtils'
import ItemFragment from './ItemFragment/ItemFragment'

interface FragmentText {
  needShowMore: boolean
  textWithKeywords: string[]
}

function FragmentText({ needShowMore, textWithKeywords }: FragmentText) {
  const extracted = useMemo(
    () => (needShowMore ? textWithKeywords : extractElement(textWithKeywords, 0, 1)),
    [needShowMore]
  )
  const parsed = useMemo(() => parseText(extracted), [extracted])

  return (
    <div className="fragment-news">
      {parsed.map((item, id) => {
        return (
          <ItemFragment
            key={id}
            text={item}
          />
        )
      })}
    </div>
  )
}

export default FragmentText
