import KeyWord from '../KeyWord/KeyWord'

// распарсить строку
export function parseText(text: string[]) {
  return text.map((item) => item.split(/(<kw>.*?<\/kw>)/g))
}

// соединить распарсенный текст
export function joinParsedText(splitted: string[]) {
  return splitted.map((item, i) => {
    if (item.startsWith('<kw>') && item.endsWith('</kw>')) {
      const content = item.replace(/<kw>|<\/kw>/g, '')

      return <KeyWord key={i}>{content}</KeyWord>
    }
    return item
  })
}
