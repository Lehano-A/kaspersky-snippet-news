import { useMemo } from 'react'
import formatDate from '../../../utils/formatDate'
import DataPair from '../../common/DataPair/DataPair'
import { IData_SnippetNews, IData_TrafficItem } from '../../../assets/data/dataNews.types'
import { HeaderNewsProps } from '../HeaderNews'
import { convertTrafficToPercent } from './utils/MetaUtils'

export interface MetaProps {
  datetime: IData_SnippetNews['DP']
  reach: IData_SnippetNews['REACH']
  miniMode?: HeaderNewsProps['miniMode']
  traffic?: IData_TrafficItem[]
}

function Meta({ datetime, reach, traffic, miniMode }: MetaProps) {
  const { day, month, year } = useMemo(() => formatDate(datetime), [datetime])
  const trafficPercentages = useMemo(
    () => (traffic ? convertTrafficToPercent(traffic) : []),
    [traffic]
  )

  return (
    <ul className="meta">
      <li>
        <time className="meta__time">
          <span className={`${miniMode ? '' : 'text--primary'}`}>{day} </span>
          <span className="text--secondary">
            {` ${month} `}
            {year}
          </span>
        </time>
      </li>

      <li>
        <DataPair
          colorText={`${miniMode ? 'onePrimaryColor' : 'swapColor'}`}
          data={[{ keyName: reach, value: miniMode ? 'Top Reach' : 'Reach' }]}
        />
      </li>

      {!miniMode && (
        <li className="meta__item">
          <span className="text--secondary mr-5">Top Traffic:</span> {}
          <DataPair
            colorText="swapColor"
            data={trafficPercentages}
          />
        </li>
      )}
    </ul>
  )
}

export default Meta
