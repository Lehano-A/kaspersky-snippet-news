import { useState } from 'react'
import { IData_SnippetNews } from '../../assets/data/dataNews.types'
import FragmentNews from './FragmentNews/FragmentNews'
import ButtonShowMore from './ButtonShowMore/ButtonShowMore'
import Tags from './Tags/Tags'
import ButtonOriginalSource from './ButtonOriginalSource/ButtonOriginalSource'
import HeaderNews from '../HeaderNews/HeaderNews'

export interface NewsCardProps {
  dataNews: IData_SnippetNews
}

function SnippetNews({ dataNews }: NewsCardProps) {
  const { KW, URL, HIGHLIGHTS } = dataNews

  const [needShowMore, setNeedShowMore] = useState(false)

  function handleClickShowMore() {
    setNeedShowMore((prevState) => !prevState)
  }

  return (
    <article>
      <HeaderNews dataNews={dataNews} />

      <FragmentNews
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
