import { DataDuplicateNews } from '@/assets/data/dataDuplicateNews.types'

// проверить отмеченные новости
function checkMarkedNews(idsMarkedNews: string[], oneNews: DataDuplicateNews) {
  return idsMarkedNews.some((id) => String(id) === String(oneNews['ID']))
}

export default checkMarkedNews
