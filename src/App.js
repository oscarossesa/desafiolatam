import React from 'react'
import './App.css'

function App () {
  const characters = [
    { name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑' },
    { name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔' },
    { name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹' },
    { name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒' },
    { name: 'Frodo', race: 'Hobbit', age: '33', weapon: 'Dagger 🗡' }
  ]

  return (
    <div className='index'>
      <h2>Fellowship of the Ring hecho por Oscar Osses A.</h2>
      <div className='container'>
        <div className='search-input'>
          <input type='text' placeholder='search hero' />
        </div>
        <div>
          <table className='characters-table'>
            <tbody>
              <tr className='character-row'>
                <th>Name</th>
                <th>Race</th>
                <th>Age</th>
                <th>Weapon</th>
                <th />
              </tr>
              {characters.map(character => (
                <tr className='character-row' key={character.index}>
                  <td>{character.name}</td>
                  <td>{character.race}</td>
                  <td>{character.age}</td>
                  <td>{character.weapon}</td>
                  <td>
                    <div className='controls'>
                      <div>☠ Kill</div>
                      <div><span role='img' aria-label='icono'>💍</span> Use Ring</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
