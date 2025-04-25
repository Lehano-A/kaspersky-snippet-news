import { useMemo } from 'react'
import { joinParsedText } from '../utils/fragmentTextUtils'
import FragmentText from '../FragmentText'

interface ItemFragmentProps {
  text: FragmentText['textWithKeywords']
}

function ItemFragment({ text }: ItemFragmentProps) {
  const textValue = useMemo(() => joinParsedText(text), [])

  return <p className="fragment-news__paragraph">{textValue} </p>
}

export default ItemFragment
