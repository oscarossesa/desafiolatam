import React, { Component } from 'react';

class HeroTable extends Component {

	useRing = () => {
		console.log('usar anillo');
	}

	killHero = () => {
		console.log('kill hero');
	}

	renderTableBody = (props) => {
		console.log(this.props.characters);
		return (
			this.props.characters.map(character => (
				<tr className='character-row' key={character.age}>
					<td>{character.name}</td>
					<td>{character.race}</td>
					<td>{character.age}</td>
					<td>{character.weapon}</td>
					<td>
						<div className='controls'>
							<div>☠ Kill</div>
							<div onClick={this.useRing}><span role='img' aria-label='icono'>💍</span> Use Ring</div>
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