import { Button } from 'antd'
import palette from '../../../scss/palette/_palette.module.scss'
import { IData_SnippetNews } from '../../../assets/data/dataNews.types'

function ButtonOriginalSource({ url }: { url: IData_SnippetNews['URL'] }) {
  return (
    <Button
      color="primary"
      variant="filled"
      style={{
        backgroundColor: palette.borderPrimaryAlpha30,
        fontWeight: 200,
        borderRadius: '9px',
        padding: '0 8px'
      }}
    >
      <a
        href={url}
        target="_blank"
      >
        Original Source
      </a>
    </Button>
  )
}

export default ButtonOriginalSource
