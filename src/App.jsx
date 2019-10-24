import React, { Component } from 'react';
import './App.css';
import HeroTable from './components/HeroTable';

class App extends Component {
  render () {       
    return (
      <div>
        <div className='index'>
          <h2>Fellowship of the Ring</h2>
          <div className='container'>
            <HeroTable></HeroTable>   
          </div>
        </div>
      </div>
    )
  }
}

export default App
