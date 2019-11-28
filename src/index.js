import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App'
import Home from './containers/Home/Home.container'
import Locations from './containers/Locations/Locations.container'
import Heroes from './containers/Heroes/Heroes.container'
import BuscarHeroPlaceholder from './contexts/PlaceholderContext'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './config/store'

ReactDOM.render(
  <BuscarHeroPlaceholder.Provider value='Buscar heroe'>
    <Provider store={store}>
      {/* <App /> */}
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/heroes' component={Heroes} />
          <Route exact path='/locations' component={Locations} />
        </Switch>
      </Router>
    </Provider>
  </BuscarHeroPlaceholder.Provider>,
  document.getElementById('root'))
