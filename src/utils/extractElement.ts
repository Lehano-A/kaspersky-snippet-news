// извлечь элемент (по порядковому номеру из массива)
function extractElement<T>(el: Array<T>, from: number, to: number) {
  return el.slice(from, to)
}

export default extractElement
