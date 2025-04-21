// получить штамп времени (1324324324324) из ISO 8601 ("2025-03-08T10:00:00.000Z")
function getTimestampFromISO(iso: string) {
  return new Date(iso).getTime()
}

export default getTimestampFromISO
