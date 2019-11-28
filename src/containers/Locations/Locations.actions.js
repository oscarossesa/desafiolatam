export const CREATE_LOCATION = 'CREATE_LOCATION'
export const SHOW_LOCATIONS_ADD_FORM = 'SHOW_LOCATIONS_ADD_FORM'

export function onCreateLOCATION (payload) {
  return {
    type: CREATE_LOCATION,
    payload
  }
}

export function onShowLocationForm (payload) {
  return {
    type: SHOW_LOCATIONS_ADD_FORM,
    payload
  }
}