import { useState } from 'react'
import { IData_SnippetNews } from '../../assets/data/dataNews.types'
import FragmentText from './FragmentText/FragmentText'
import ButtonShowMore from './ButtonShowMore/ButtonShowMore'
import Tags from './Tags/Tags'
import ButtonOriginalSource from './ButtonOriginalSource/ButtonOriginalSource'
import HeaderNews from '../HeaderNews/HeaderNews'

export interface SnippetNewsProps {
  dataNews: IData_SnippetNews
  checkboxId: string
  setterMarkedNews: React.Dispatch<React.SetStateAction<string[]>>
}

function SnippetNews({ dataNews, checkboxId, setterMarkedNews }: SnippetNewsProps) {
  const { KW, URL, HIGHLIGHTS } = dataNews

  const [needShowMore, setNeedShowMore] = useState(false)

  function handleClickShowMore() {
    setNeedShowMore((prevState) => !prevState)
  }

  return (
    <article>
      <HeaderNews
        dataNews={dataNews}
        checkboxId={checkboxId}
        setterMarkedNews={setterMarkedNews}
      />

      <FragmentText
        needShowMore={needShowMore}
        textWithKeywords={HIGHLIGHTS}
      />

      <ButtonShowMore
        needShowMore={needShowMore}
        handleClick={handleClickShowMore}
      />

      <div className="flex mb-20">
        <Tags tags={KW} />
      </div>

      <div className="flex mb-21">
        <ButtonOriginalSource url={URL} />
      </div>
    </article>
  )
}

export default SnippetNews
