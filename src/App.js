import React, { Component } from 'react';
import './App.css';
import HeroTableContainer from './components/HeroTableContainer';

class App extends Component {
  render () {       
    return (
<<<<<<< HEAD
      <div>
        <div className='index'>
          <h2>Fellowship of the Ring</h2>
          <div className='container'>
            <HeroTableContainer></HeroTableContainer>   
=======
      <div className='index'>
        <h2>Fellowship of the Ring</h2>
        <div className='container'>
          <div className='search-input'>
            <input type='text' placeholder='search hero' />
          </div>
          <div>
            <HeroTable characters={characters}></HeroTable>            
>>>>>>> 6257dff2309aab207f11bdb28982ba4dbb760135
          </div>
        </div>
      </div>
    )
  }
}

export default App
