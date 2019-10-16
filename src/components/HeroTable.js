import React, { Component } from 'react';

class HeroTable extends Component {

	constructor(props){
		super(props)

		this.state = {
			characters: props.characters,
			showRings: true,
		}
	}

	//Usar anillo: Esconde el row de la tabla y oculta la opción de usar anillo a todos los demás.
	useRing = (id) => {
		return () => {
			console.log(`usar anillo`);
			const characters = this.state.characters;
			const newCharacters = characters.filter(character => character.id !== id)
			this.setState({ characters: newCharacters, showRings: false });
		}
	}

	//Kill: Tacha (Le agrega un estilo grisáceo) y manda al final de la tabla al row.
	killHero = (id) => {
		return () => {
			console.log(`kill hero ${id}`);
		}
	}

	renderTableBody = () => {
		console.log(this.state.characters);
		return (
			this.state.characters.map(character => (
				<tr className='character-row' key={character.age}>
					<td>{character.name}</td>
					<td>{character.race}</td>
					<td>{character.age}</td>
					<td>{character.weapon}</td>
					<td>
						<div className='controls'>		
							<div onClick={this.killHero(character.id)} className='eliminado'> ☠ Kill</div>
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