import HeaderNews from '../../HeaderNews/HeaderNews'
import { IData_SnippetNews } from '../../../assets/data/dataNews.types'
import { DataDuplicateNews } from '../../../assets/data/dataDuplicateNews.types'
import { useMemo, useState } from 'react'

interface MiniNewsSnippetProps {
  duplicates: DataDuplicateNews[]
  dataNews: IData_SnippetNews
}

function MiniNewsSnippet({ dataNews, duplicates }: MiniNewsSnippetProps) {
  const [checkedMiniNews, setCheckedMiniNews] = useState<string[]>([])

  const getClassCheckedCard = useMemo(
    () => (card: DataDuplicateNews) =>
      checkedMiniNews.some((id) => String(id) === String(card['ID'])),
    [checkedMiniNews]
  )

  return duplicates.map((item) => {
    const cardId = String(item['ID'])

    return (
      <article
        key={item['ID']}
        id={cardId}
        className={`mini-news-snippet ${
          getClassCheckedCard(item) ? 'mini-news-snippet--checked' : ''
        }`}
      >
        <HeaderNews
          miniMode
          dataNews={dataNews}
          duplicateNews={item}
          setCheckNews={setCheckedMiniNews}
          checkboxId={cardId}
        />
      </article>
    )
  })
}

export default MiniNewsSnippet
