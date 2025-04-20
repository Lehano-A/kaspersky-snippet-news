import React from 'react'
import { getClassColorText } from './utils/dataPairUtils'

interface KeyValueProps {
  colon?: boolean
  colorText?: 'swapColor' | 'onePrimaryColor' | 'default'
  data: { keyName?: string | number; count?: string | number; value: string | number }[]
}

function DataPair({ data, colorText = 'default', colon = false }: KeyValueProps) {
  const classColon = colon ? 'data-pair__term--colon' : ''
  const classColorKey = getClassColorText(colorText, 'dt')
  const classColorValue = getClassColorText(colorText, 'dd')

  return (
    <dl className="data-pair">
      {data.map((item, id) => {
        const term = 'keyName' in item ? item.keyName : item.value
        const definition = 'count' in item ? item.count : item.value

        return (
          <React.Fragment key={id}>
            <dt className={`data-pair__term ${classColon} ${classColorKey}`}>{term}</dt>
            <dd className={`data-pair__definition ${classColorValue} `}>{definition}</dd>
          </React.Fragment>
        )
      })}
    </dl>
  )
}

export default DataPair
