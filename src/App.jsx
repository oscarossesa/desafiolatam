import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import HeroTable from './components/table/HeroTable';
import datos from './api/characters';
import FormAdd from './components/formAdd/FormAdd';
import TableFilter from './components/table/TableFilter';
import Footer from './components/layout/Footer';

const App = () => {
   const [characters, setCharacters] = useState([]);
   const [showRings, setShowRings] = useState(true);

   useEffect(() => {
      console.log(datos)
      setTimeout(() => {
         getCharacters();
      }, 1000);
   }, []);

   const getCharacters = () => {

      // mock
      setCharacters(datos);
   }

   const addCharacter = character => {
      character.id = characters.length + 1
      setCharacters([...characters, character])
   }

   // Kill function: Tacha (Le agrega un estilo grisáceo) y manda al final de la tabla al row.
   const handleKillCharacter = id => {
      return () => {
         // identifico el id del elemento a mover al final del array.
         const index = characters.findIndex(character => character.id === id);
         // actualizo la propiedad dead del elemento.
         characters[index].dead = true;
         // muevo el elemento al final del array.
         characters.push(characters.splice(index, 1)[0]);
         // actualizo el hook state para que el componente se renderice y se refleje el cambio.
         setCharacters([...characters]);
      }
   }

   // Use ring function: Esconde el row de la tabla y oculta la opción de usar anillo a todos los demás.
   const handleUseRing = id => {
      return () => {
         // elimino el heroe que usa el anillo.				
         const newCharacters = characters.filter(character => character.id !== id)         
         // actualizo el hook state para que el componente se renderice y se refleje el cambio.
         setCharacters(newCharacters);
         setShowRings(false)
      }
   }

   return (<>
      <NavBar></NavBar>
      <div className="container formAdd">
         <FormAdd
            addCharacter={addCharacter}
         />
         <div className="container top-margin-xs">
            <TableFilter></TableFilter>
         </div>
      </div>
      <div className="container top-margin-xs">
         <HeroTable
            characters={characters}
            handleKillCharacter={handleKillCharacter}
            handleUseRing={handleUseRing}
            showRings={showRings}
         />
      </div>
      <section id="footer" className="top-margin-lg bg-dark">
        <div className="container">
          <Footer />
        </div>
      </section>
   </>
   )
}

export default App;
