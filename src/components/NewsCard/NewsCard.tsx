import { IData_SnippetNews } from './news.types'

interface NewsCardProps {
  dataNews: IData_SnippetNews
}

function NewsCard({ dataNews }: NewsCardProps) {
  console.log('dataNews', dataNews)
  return (
    <article>
      <h2>sdfdsffdsfsfdf</h2>
    </article>
  )

}

export default NewsCard
