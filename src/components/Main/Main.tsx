import { useMemo, useState } from 'react'
import dataNews from '../../assets/data/dataNews.json'
import SnippetNews from '../SnippetNews/SnippetNews'
import Duplicates from '../Duplicates/Duplicates'
import checkMarkedNews from '../../utils/checkMarkedNews'

function Main() {
  const [idsMarkedNews, setIdsMarkedNews] = useState<string[]>([])

  const getClassMarketNews = useMemo(
    () => (checkMarkedNews(idsMarkedNews, dataNews) ? 'news-box--marked' : ''),
    [idsMarkedNews]
  )

  return (
    <main className="main">
      <section className={`news-box ${getClassMarketNews}`}>
        <SnippetNews
          key={dataNews.ID}
          dataNews={dataNews}
          checkboxId={String(dataNews.ID)}
          setterMarkedNews={setIdsMarkedNews}
        />

        <Duplicates dataNews={dataNews} />
      </section>
    </main>
  )
}

export default Main
