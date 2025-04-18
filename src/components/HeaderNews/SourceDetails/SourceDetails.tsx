import CountryFlag from 'react-country-flag'
import BoxIconWithText from '../../common/BoxIconWithText/BoxIconWithText'
import Link from '../../common/Link/Link'
import { HeaderNewsProps } from '../HeaderNews'
import { IData_SnippetNews } from '../../../assets/data/dataNews.types'
import { GlobalOutlined, ReadOutlined, UserOutlined } from '@ant-design/icons'

interface SourceDetailsProps {
  miniMode?: HeaderNewsProps['miniMode']
  source: IData_SnippetNews['DOM']
  countryCode: IData_SnippetNews['CNTR_CODE']
  country: IData_SnippetNews['CNTR']
  lang: IData_SnippetNews['LANG']
  favicon: IData_SnippetNews['FAV']
  author: IData_SnippetNews['AU']
}

function SourceDetails({
  miniMode,
  source,
  countryCode,
  country,
  lang,
  favicon,
  author
}: SourceDetailsProps) {
  return (
    <div className="source-details">
      <BoxIconWithText>
        {favicon ? (
          <img
            src={favicon}
            className="source-details__favicon"
          />
        ) : (
          <GlobalOutlined className="icon--primary icon--size-17" />
        )}
        <Link
          underline
          href={source}
        >
          {source}
        </Link>
      </BoxIconWithText>

      <BoxIconWithText>
        <CountryFlag
          svg
          countryCode={countryCode}
          className="icon--size-12"
        />
        <span className="source-details__language">{country}</span>
      </BoxIconWithText>

      {!miniMode && (
        <BoxIconWithText>
          <ReadOutlined className="icon--primary icon--size-17" />
          <span className="source-details__language">{lang}</span>
        </BoxIconWithText>
      )}

      {author.length > 0 && (
        <BoxIconWithText>
          <UserOutlined className="icon--primary icon--size-17" />
          <span className="source-details__language">{author.join(', ')}</span>
        </BoxIconWithText>
      )}
    </div>
  )
}

export default SourceDetails
