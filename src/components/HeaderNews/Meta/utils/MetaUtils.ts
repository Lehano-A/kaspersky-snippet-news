import { IData_TrafficItem } from '../../../../assets/data/dataNews.types'
import transformDecimalAsPercentages from '../../../../utils/transformFloatAsPercentages'

export function convertTrafficToPercent(traffic: IData_TrafficItem[]) {
  return traffic.map((item: IData_TrafficItem) => {
    return { ...item, count: `${transformDecimalAsPercentages(item.count, 1)}%` }
  })
}
