import { useEffect, useMemo, useState } from 'react'
import dataDuplicateNews from '../../assets/data/dataDuplicateNews.json'
import MiniNewsSnippet from './MiniSnippetNews/MiniSnippetNews'
import DataPair from '../common/DataPair/DataPair'
import ButtonSort from './ButtonSort/ButtonSort'
import extractElement from '../../utils/extractElement'
import { IData_SnippetNews } from '../../assets/data/dataNews.types'
import { DataDuplicateNews } from '../../assets/data/dataDuplicateNews.types'
import { fillKeysDuplicatesNews, sortDuplicates } from './utils/duplicatesUtils'
import ButtonViewDuplicates from './ButtonViewDuplicates/ButtonViewDuplicates'

export type SortedBy = 'By Relevance' | 'By Date'

const MAX_DUPLICATES_TO_SHOW = 2

function Duplicates({ dataNews }: { dataNews: IData_SnippetNews }) {
  const totalDuplicates = dataDuplicateNews.length
  const duplicatesFilledKeys = useMemo(
    () => fillKeysDuplicatesNews(dataDuplicateNews, dataNews),
    []
  )

  const [sortedBy, setSortedBy] = useState<SortedBy>('By Relevance')
  const [limitVisible, setLimitVisible] = useState(1)
  const [duplicates, setDuplicates] = useState<DataDuplicateNews[]>(duplicatesFilledKeys)

  // вызывается при нажатии на кнопку "View Duplicates" или при выборе сортировки
  useEffect(() => {
    updateViewDuplicates(limitVisible, sortedBy)
  }, [limitVisible, sortedBy])

  // обработать нажатие на кнопку "View Duplicates"
  function handleClickViewDuplicates() {
    const newLimit = limitVisible + MAX_DUPLICATES_TO_SHOW
    setLimitVisible(newLimit)
  }

  // обновить отображаемые дубликаты
  function updateViewDuplicates(newLimit: number, sortedBy: SortedBy) {
    const sorted = sortDuplicates(duplicatesFilledKeys, sortedBy)
    const extractedMiniNews = extractElement(sorted, 0, newLimit)

    setDuplicates(extractedMiniNews)
  }

  return (
    <div className="duplicates">
      <div className="duplicates__counter-with-sort">
        <DataPair
          colon
          data={[{ keyName: 'Duplicates', value: totalDuplicates }]}
        />
        <ButtonSort
          sortedBy={sortedBy}
          setSortedBy={setSortedBy}
        />
      </div>

      <div className="duplicates__mini-news">
        <MiniNewsSnippet
          duplicates={duplicates}
          dataNews={dataNews}
        />
        {limitVisible < dataDuplicateNews.length && (
          <ButtonViewDuplicates handleClick={handleClickViewDuplicates} />
        )}
      </div>
    </div>
  )
}

export default Duplicates
