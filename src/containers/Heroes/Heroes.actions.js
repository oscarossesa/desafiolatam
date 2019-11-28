export const CREATE_HEROE = 'CREATE_HEROE'
export const SHOW_HEROES_ADD_FORM = 'SHOW_HEROES_ADD_FORM'

export function onCreateHeroe (payload) {
  return {
    type: CREATE_HEROE,
    payload
  }
}

export function onShowHeroesAddForm (payload) {
  return {
    type: SHOW_HEROES_ADD_FORM,
    payload
  }
}