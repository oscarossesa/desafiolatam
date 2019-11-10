import React, { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/navBar/NavBar'
import Footer from './components/layout/Footer'
import datos from './api/characters'
import FormAdd from './components/formAdd/FormAdd'
import Table from './components/table/Table'
import TableRow from './components/table/TableRow'
import TableFilter from './components/table/TableFilter'
import TableCell from './components/table/TableCell'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [showRings, setShowRings] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      getCharacters()
    }, 1000)
  }, [])

  const getCharacters = () => {
    // mock
    setCharacters(datos)
  }

  const addCharacter = character => {
    character.id = characters.length + 1
    setCharacters([...characters, character])
  }

  // Kill function: Tacha (Le agrega un estilo grisáceo) y manda al final de la tabla al row.
  const handleOnClicKill = id => {
    return () => {
      // identifico el id del elemento a mover al final del array.
      const index = characters.findIndex(character => character.id === id)
      // actualizo la propiedad dead del elemento.
      characters[index].dead = true
      // muevo el elemento al final del array.
      characters.push(characters.splice(index, 1)[0])
      // actualizo el hook state para que el componente se renderice y se refleje el cambio.
      setCharacters([...characters])
    }
  }

  // Use ring function: Esconde el row de la tabla y oculta la opción de usar anillo a todos los demás.
  const handleOnClickUseRing = id => {
    return () => {
      // elimino el heroe que usa el anillo.
      const newCharacters = characters.filter(character => character.id !== id)
      // actualizo el hook state para que el componente se renderice y se refleje el cambio.
      setCharacters(newCharacters)
      setShowRings(false)
    }
  }

  return (
    <>
      <NavBar />
      <div className='container formAdd'>
        <FormAdd
          addCharacter={addCharacter}
        />
        <div className='container top-margin-xs'>
          <TableFilter />
        </div>
      </div>
      <div className='container top-margin-xs'>
        <Table>
          <TableRow withHeader>
            <TableCell isHeader>Nombre</TableCell>
            <TableCell isHeader>Raza</TableCell>
            <TableCell isHeader>Edad</TableCell>
            <TableCell isHeader>Arma</TableCell>
            <TableCell isHeader />
          </TableRow>
          {characters.map((character, index) => (
            <TableRow dead={character.dead} key={`${character.name}-${index}`}>
              <TableCell>{character.name}</TableCell>
              <TableCell>{character.race}</TableCell>
              <TableCell>{character.age}</TableCell>
              <TableCell>
                <div className='controls'>
                  <div onClick={handleOnClicKill(character.id)}>
                    <span role='img' aria-label='icono'>☠</span> Kill
                  </div>
                  {showRings
                    ? <div onClick={handleOnClickUseRing(character.id)}><span role='img' aria-label='icono'>💍</span> Use Ring</div>
                    : null}
                </div>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </Table>
      </div>
      <section id='footer' className='top-margin-lg bg-dark'>
        <div className='container'>
          <Footer />
        </div>
      </section>
    </>
  )
}

export default App
