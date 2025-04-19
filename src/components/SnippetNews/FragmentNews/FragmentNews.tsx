import { useMemo } from 'react'
import extractElement from '../../../utils/extractElement'
import { joinParsedText, parseText } from './utils/fragmentNewsUtils'

interface FragmentNews {
  needShowMore: boolean
  textWithKeywords: string[]
}

function FragmentNews({ needShowMore, textWithKeywords }: FragmentNews) {
  const extracted = useMemo(
    () => (needShowMore ? textWithKeywords : extractElement(textWithKeywords, 0, 1)),
    [needShowMore]
  )

  const parsed = useMemo(() => parseText(extracted), [extracted])

  return (
    <div className="fragment-news">
      {parsed.map((item, id) => {
        return (
          <p
            key={id}
            className="fragment-news__paragraph"
          >
            {joinParsedText(item)}{' '}
          </p>
        )
      })}
    </div>
  )
}

export default FragmentNews
