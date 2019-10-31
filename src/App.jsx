import React, { Component } from 'react';
import './App.css';
import HeroTableContainer from './components/HeroTableContainer';
import NavBar from './components/navBar/NavBar';
import characters from './api/characters';
import ButtonAdd from './components/formAdd/ButtonAdd';
import FormAdd from './components/formAdd/FormAdd';
import TableFilter from './components/TableFilter';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: null,
      showRings: true,
      name: null,
      race: null,
      age: 0,
      weapon: null,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.getCharacters();
    }, 1000);
  }

  getCharacters() {
    this.setState({ characters });
  }

  // Use ring function: Esconde el row de la tabla y oculta la opción de usar anillo a todos los demás.
  handleUseRing = (id) => {
    return () => {
      // obtengo el array de characters desde el state.
      const characters = this.state.characters;
      // elimino el heroe que usa el anillo.				
      const newCharacters = characters.filter(character => character.id !== id)
      // actualizo el state para que el componente se renderice y se refleje el cambio.
      this.setState({
        characters: newCharacters,
        showRings: false
      });
    }
  }

  // Kill function: Tacha (Le agrega un estilo grisáceo) y manda al final de la tabla al row.
  handleKill = (id) => {
    return () => {
      // usando destructuring obtengo el array de characters
      const { characters } = this.state;
      // identifico el id del elemento a mover al final del array.
      const index = characters.findIndex(character => character.id === id);
      // actualizo la propiedad dead del elemento.
      characters[index].dead = true;
      // muevo el elemento al final del array.
      characters.push(characters.splice(index, 1)[0]);
      // actualizo el state para que el componente se renderice y se refleje el cambio.
      this.setState({
        characters: characters,
      });
    }
  }

  handleAdd = () => {
    const { name, race, age, weapon } = this.state;

    this.setState({
      characters: [
        ...this.state.characters,
        {
          id: Date.now(),
          name: name,
          race: race,
          age: age,
          weapon: weapon,
          dead: false,
        }
      ]
    }
    )
  }

  handleChange(value, property) {
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  render() {
    const {
      characters,
      showRings,
    } = this.state;

    return (<>
      <NavBar></NavBar>
      <div className="container formAdd">
        <FormAdd handleChange={this.handleChange} />
        <ButtonAdd
          text='Agregar Heroe'
          handleAdd={this.handleAdd} />
      </div>
      <div className="container top-margin-xs">
        <TableFilter></TableFilter>
      </div>
      <div className="container top-margin-xs">
        <HeroTableContainer
          characters={characters}
          showRings={showRings}
          handleAdd={this.handleAdd}
          handleUseRing={this.handleUseRing}
          handleKill={this.handleKill} />
      </div>
      <section id="footer" className="top-margin-lg bg-dark">
        <div className="container">
          <Footer />
        </div>
      </section>
    </>
    )
  }
}

export default App
