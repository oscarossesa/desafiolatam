import React, { Component } from 'react';
import './App.css';
import HeroTable from './components/HeroTable';

class App extends Component {
  render () {    
    const characters = [
      { name: 'Gandalf', race: 'Maia', age: 2019, weapon: 'Staff 🏑' },
      { name: 'Aragorn', race: 'Human', age: 120, weapon: 'Sword ⚔' },
      { name: 'Legolas', race: 'Elf', age: 200, weapon: 'Bow 🏹' },
      { name: 'Gimli', race: 'Dwarf', age: 139, weapon: 'Axe ⚒' },
      { name: 'Frodo', race: 'Hobbit', age: 33, weapon: 'Dagger 🗡' }
    ];
    
    return (
      <div className='index'>
        <h2>Fellowship of the Ring hecho por Oscar Osses A.</h2>
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
