import { CREATE_HEROE } from './Heroes.actions'

const initialState = {
  collection: [],
  showAddForm: false
}

function heroesReducer (state = initialState, action) {
  switch (action.type) {
    case CREATE_HEROE: {
      return {
        ...state,
        collection: state.collection.concat({ name: action.payload.value })
      }
    }
    default: {
      return state
    }
  }
}

export default heroesReducer