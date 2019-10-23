import React, { Component } from 'react';
import './App.css';
import HeroTable from './components/HeroTable';
import characters from './api/characters'

class App extends Component {
  render () {       
    return (
      <div className='index'>
        <h2>Fellowship of the Ring</h2>
        <div className='container'>
          <div className='search-input'>
            <input type='text' placeholder='search hero' />
          </div>
          <div>
            <HeroTable characters={characters}></HeroTable>            
          </div>
        </div>
      </div>
    )
  }
}

export default App
