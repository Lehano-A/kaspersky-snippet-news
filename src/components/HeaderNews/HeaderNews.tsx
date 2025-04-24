import Meta from './Meta/Meta'
import HeaderToolbar from './Toolbar/Toolbar'
import SourceDetails from './SourceDetails/SourceDetails'
import Title from '../common/Title/Title'
import { IData_SnippetNews } from '../../assets/data/dataNews.types'
import { DataDuplicateNews } from '../../assets/data/dataDuplicateNews.types'

export interface HeaderNewsProps {
  miniMode?: boolean
  duplicateNews?: DataDuplicateNews
  dataNews: IData_SnippetNews
  checkboxId?: string
  setCheckNews: React.Dispatch<React.SetStateAction<string[]>>
}

function HeaderNews({
  miniMode,
  dataNews,
  duplicateNews,
  checkboxId,
  setCheckNews
}: HeaderNewsProps) {
  const { AU, TI, DP, DOM, FAV, SENT, LANG, REACH, CNTR, CNTR_CODE, TRAFFIC } = dataNews

  return (
    <header className="header-news">
      <div className="header-news__box-meta-toolbar">
        <Meta
          miniMode={miniMode}
          datetime={duplicateNews ? duplicateNews['DP'] : DP}
          reach={REACH}
          traffic={TRAFFIC}
        />

        <HeaderToolbar
          miniMode={miniMode}
          SENT={SENT}
          checkboxId={checkboxId}
          // handleToggleCardNews={handleToggleCardNews}
          setCheckNews={setCheckNews}
        />
      </div>

      <Title variant="h2">{TI}</Title>

      <div className={`${miniMode ? '' : 'mb-13'}`}>
        <SourceDetails
          miniMode={miniMode}
          source={duplicateNews ? duplicateNews['DOM'] : DOM}
          countryCode={CNTR_CODE}
          country={CNTR}
          lang={LANG}
          favicon={duplicateNews ? duplicateNews['FAV'] : FAV}
          author={AU}
        />
      </div>
    </header>
  )
}

export default HeaderNews
