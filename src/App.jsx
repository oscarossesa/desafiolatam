import React, { Component } from 'react';
import './App.css';
import HeroTableContainer from './components/HeroTableContainer';

class App extends Component {
  render () {       
    return (
      <div>
        <div className='index'>
          <h2>Fellowship of the Ring</h2>
          <div className='container'>
            <HeroTableContainer></HeroTableContainer>   
          </div>
        </div>
      </div>
    )
  }
}

export default App
