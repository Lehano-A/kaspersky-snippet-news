import { useState } from 'react'
import { IData_SnippetNews } from '../../../assets/data/dataNews.types'
import { DataDuplicateNews } from '../../../assets/data/dataDuplicateNews.types'
import ItemMiniSnippet from './ItemMiniSnippet/ItemMiniSnippet'

interface MiniNewsSnippetProps {
  duplicates: DataDuplicateNews[]
  dataNews: IData_SnippetNews
}

function MiniNewsSnippet({ duplicates, ...rest }: MiniNewsSnippetProps) {
  const [idsMarkedMiniNews, setIdsMarkedMiniNews] = useState<string[]>([])

  return duplicates.map((item) => {
    return (
      <ItemMiniSnippet
        key={item['ID']}
        item={item}
        idsMarkedMiniNews={idsMarkedMiniNews}
        setterMarkedNews={setIdsMarkedMiniNews}
        {...rest}
      />
    )
  })
}

export default MiniNewsSnippet
