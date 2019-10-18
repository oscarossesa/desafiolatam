import React, { Component } from 'react';

class HeroTable extends Component {

	constructor(props){
		super(props)

		this.state = {
			characters: props.characters,
			showRings: true,
		}
	}

	// Use ring function: Esconde el row de la tabla y oculta la opción de usar anillo a todos los demás.
	useRing = (id) => {
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
	killHero = (id) => {
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

	renderTableBody = () => {
		return (
			this.state.characters.map(character => (
				<tr key={character.id} className={ character.dead ? 'character-row character-dead' : 'character-row'}>
					<td>{character.name}</td>
					<td>{character.race}</td>
					<td>{character.age}</td>
					<td>{character.weapon}</td>
					<td>
						<div className='controls'>		
							<div onClick={this.killHero(character.id)}> ☠ Kill</div>
							{ this.state.showRings ? 
								<div onClick={this.useRing(character.id)}><span role='img' aria-label='icono'>💍</span> Use Ring</div> : 
								null }
						</div>
					</td>
				</tr>
			))
		);
	}

	render() {								
		return (
			<div>
				<table className='characters-table'>
					<tbody>
						<tr className='character-row'>
							<th>Name</th>
							<th>Race</th>
							<th>Age</th>
							<th>Weapon</th>
							<th></th>
						</tr>
						{this.renderTableBody()}
					</tbody>
				</table>
			</div>
		)
	}
}

export default HeroTable;