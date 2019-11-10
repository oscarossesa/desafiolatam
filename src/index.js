import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import BuscarHeroPlaceholder from './contexts/PlaceholderContext'

ReactDOM.render(
  <BuscarHeroPlaceholder.Provider value='Buscar heroe'>
    <App />
  </BuscarHeroPlaceholder.Provider>,
  document.getElementById('root'))
