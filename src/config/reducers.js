import { combineReducers } from 'redux'
import locationsReducer from '../containers/Locations/Locations.reducer'
import heroesReducer from '../containers/Heroes/Heroes.reducer'

export default combineReducers({ 
  locationsReducer,
  heroesReducer
})