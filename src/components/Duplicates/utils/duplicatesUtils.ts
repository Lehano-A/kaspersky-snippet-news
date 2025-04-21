import getTimestampFromISO from '../../../utils/getTimestampFromISO'
import { DataDuplicateNews } from '../../../assets/data/dataDuplicateNews.types'
import { IData_SnippetNews } from '../../../assets/data/dataNews.types'
import { BY_DATE, BY_RELEVANCE } from '../ButtonSort/ButtonSort'
import { SortedBy } from '../Duplicates'

// заполнить ключи дубликатов новости
export function fillKeysDuplicatesNews(
  duplicates: DataDuplicateNews[],
  dataNews: IData_SnippetNews
) {
  return duplicates.map((item) => {
    item.AU = dataNews.AU
    item.CNTR = dataNews.CNTR

    return item
  })
}

// сортировать дубликаты
export function sortDuplicates(data: DataDuplicateNews[], sortedBy: SortedBy): DataDuplicateNews[] {
  if (sortedBy === BY_RELEVANCE) {
    return data
  }

  if (sortedBy === BY_DATE) {
    const copy = [...data]
    return copy.sort(
      (a: DataDuplicateNews, b: DataDuplicateNews) =>
        getTimestampFromISO(a['DP']) - getTimestampFromISO(b['DP'])
    )
  }

  throw new Error(`Unknown sortedBy value: ${sortedBy}`)
}
