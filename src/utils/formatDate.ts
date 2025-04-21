// форматировать дату (2025-03-06T21:00:00)
function formatDate(datetime: string) {
  const date = new Date(datetime)

  const day = date.getDate()
  const month = date.toLocaleString('en-US', { month: 'short' })
  const year = date.getFullYear()

  return { day, month, year }
}

export default formatDate
