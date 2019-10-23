import React, { Component } from 'react';
import HeroRow from './HeroRow';
import characters from '../api/characters';

class HeroTable extends Component {

	constructor() {
		super()

		this.state = {
			characters: null,
			showRings: true,
		}
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

	render() {
		const { 
			characters,
			showRings,
		} = this.state;

		if (characters == null) {
			return (
				<div>Cargando datos...</div>
			)
		} else {
			return (
				<table className='characters-table'>
					<tbody>
						<tr className='character-row'>
							<th>Name</th>
							<th>Race</th>
							<th>Age</th>
							<th>Weapon</th>
							<th></th>
						</tr>
						{characters.map(character => (
							<HeroRow 
								key={character.id} 
								character={character}
								showRings={showRings}
								handleUseRing={this.handleUseRing}
								handleKill={this.handleKill}
							></HeroRow>
						))}
					</tbody>
				</table>
			)
		}
	}
}

export default HeroTable;