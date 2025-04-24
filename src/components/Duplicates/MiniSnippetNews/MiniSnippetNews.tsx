import HeaderNews from '../../HeaderNews/HeaderNews'
import { IData_SnippetNews } from '../../../assets/data/dataNews.types'
import { DataDuplicateNews } from '../../../assets/data/dataDuplicateNews.types'
import { useMemo, useState } from 'react'
import checkMarkedNews from '../../../utils/checkMarkedNews'

interface MiniNewsSnippetProps {
  duplicates: DataDuplicateNews[]
  dataNews: IData_SnippetNews
}

function MiniNewsSnippet({ dataNews, duplicates }: MiniNewsSnippetProps) {
  const [idsMarkedMiniNews, setIdsMarkedMiniNews] = useState<string[]>([])

  const getClassMarkedNews = useMemo(
    () => (oneNews: DataDuplicateNews) =>
      checkMarkedNews(idsMarkedMiniNews, oneNews) ? 'mini-snippet-news--marked' : '',
    [idsMarkedMiniNews]
  )

  return duplicates.map((item) => {
    const cardId = String(item['ID'])

    return (
      <article
        key={item['ID']}
        id={cardId}
        className={`mini-snippet-news ${getClassMarkedNews(item)}`}
      >
        <HeaderNews
          miniMode
          dataNews={dataNews}
          duplicateNews={item}
          setterMarkedNews={setIdsMarkedMiniNews}
          checkboxId={cardId}
        />
      </article>
    )
  })
}

export default MiniNewsSnippet
