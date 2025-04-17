import NewsCard from '../NewsCard/NewsCard'
import data from '../../assets/data/data.json'
import { IData_SnippetNews } from '../NewsCard/news.types'

function App() {
  return data.map((item: IData_SnippetNews) => <NewsCard key={item.ID} dataNews={item} />)
}

export default App
