import React, { Component } from 'react';
import HeroRow from './HeroRow';

class HeroTable extends Component {

	constructor(props) {
		super(props)
		console.log('HeroTable');
	}

	//Usar anillo: Esconde el row de la tabla y oculta la opción de usar anillo a todos los demás.
	useRing = (id) => {
		return () => {
			console.log(`usar anillo`);
			const characters = this.state.characters;
			console.log('useRing');
			console.log(characters);
			const newCharacters = characters.filter(character => character.id !== id)
			// this.setState({ characters: newCharacters, showRings: false });
		}
	}

	//Kill: Tacha (Le agrega un estilo grisáceo) y manda al final de la tabla al row.
	killHero = (id) => {
		return () => {
			console.log(`kill hero ${id}`);


		}
	}

	render() {
		const { characters } = this.props;

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
							id={character.id} 
							name={character.name} 
							race={character.race} 
							age={character.age} 
							weapon={character.weapon} 
							onUseRing={this.useRing}
							onUseKill={this.useKill}
							showRings='true'></HeroRow>
					))}
				</tbody>
			</table>
		)
	}
}

export default HeroTable;