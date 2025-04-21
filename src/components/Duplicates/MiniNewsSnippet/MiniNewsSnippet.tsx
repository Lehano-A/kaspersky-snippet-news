import HeaderNews from '../../HeaderNews/HeaderNews'
import { IData_SnippetNews } from '../../../assets/data/dataNews.types'
import { DataDuplicateNews } from '../../../assets/data/dataDuplicateNews.types'

interface MiniNewsSnippetProps {
  duplicates: DataDuplicateNews[]
  dataNews: IData_SnippetNews
}

function MiniNewsSnippet({ dataNews, duplicates }: MiniNewsSnippetProps) {
  return duplicates.map((item, id) => (
    <article
      key={id}
      className="duplicates__mini-news-snippet"
    >
      <HeaderNews
        miniMode
        dataNews={dataNews}
        duplicateNews={item}
      />
    </article>
  ))
}

export default MiniNewsSnippet
