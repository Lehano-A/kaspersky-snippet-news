// преобразовать дробь в проценты
function transformDecimalAsPercentages(float: number, decimalsCount: number) {
  return (float * 100).toFixed(decimalsCount)
}

export default transformDecimalAsPercentages
