import { DataDuplicateNews } from '../../../../assets/data/dataDuplicateNews.types'
import { IData_SnippetNews } from '../../../../assets/data/dataNews.types'
import HeaderNews from '../../../../components/HeaderNews/HeaderNews'
import checkMarkedNews from '../../../../utils/checkMarkedNews'
import React, { useMemo } from 'react'

interface ItemMiniSnippet {
  item: DataDuplicateNews
  dataNews: IData_SnippetNews
  setterMarkedNews: React.Dispatch<React.SetStateAction<string[]>>
  idsMarkedMiniNews: string[]
}

function ItemMiniSnippet({ item, idsMarkedMiniNews, dataNews, setterMarkedNews }: ItemMiniSnippet) {
  const cardId = String(item['ID'])
  const getClassMarkedNews = useMemo(
    () => (checkMarkedNews(idsMarkedMiniNews, item) ? 'mini-snippet-news--marked' : ''),
    [idsMarkedMiniNews]
  )

  return (
    <article
      key={item['ID']}
      id={cardId}
      className={`mini-snippet-news ${getClassMarkedNews}`}
    >
      <HeaderNews
        miniMode
        dataNews={dataNews}
        duplicateNews={item}
        setterMarkedNews={setterMarkedNews}
        checkboxId={cardId}
      />
    </article>
  )
}

export default ItemMiniSnippet
