export function capitalize(string) { // capitalizes first letters of names
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getTypes = (typeArray) => {
  let types = typeArray.map((element) => {
    return capitalize(element.type.name)
  })
  return types.join(' & ')
}

export const getAbilities = (abilityArray) => {
  let abilities = abilityArray.map((element) => {
    return capitalize(element.ability.name)
  })
  return abilities.join(', ')
}

export function fixNumber(num) {
  let height = (num / 10).toFixed(1)
  return height
}