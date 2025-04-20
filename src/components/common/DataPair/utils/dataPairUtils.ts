export function getClassColorText(colorText: string, tag: 'dt' | 'dd') {
  if (colorText === 'onePrimaryColor') {
    return 'text--primary'
  }

  if (tag === 'dt') {
    if (colorText === 'default' || colorText === 'onePrimaryColor') {
      return 'text--primary'
    }

    if (colorText === 'swapColor') {
      return 'text--secondary'
    }
  }

  if (tag === 'dd') {
    if (colorText === 'default' || colorText === 'onePrimaryColor') {
      return 'text--secondary'
    }

    if (colorText === 'swapColor') {
      return 'text--primary'
    }
  }
}
