import dataNews from '../../assets/data/dataNews.json'
import SnippetNews from '../SnippetNews/SnippetNews'
import Duplicates from '../Duplicates/Duplicates'

function Main() {
  return (
    <main className="main">
      <section className="news-box">
        <SnippetNews
          key={dataNews.ID}
          dataNews={dataNews}
        />

        <Duplicates dataNews={dataNews} />
      </section>
    </main>
  )
}

export default Main
