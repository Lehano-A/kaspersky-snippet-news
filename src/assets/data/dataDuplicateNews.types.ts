import { IData_SnippetNews } from './dataNews.types'

export interface DataDuplicateNews {
  ID: number
  DP: string
  FAV: string
  DOM: string
  URL: string
  AU: IData_SnippetNews['AU']
  CNTR: string
}
