import React from 'react';
import HeroRow from './HeroRow';
import {
	Table,
} from 'react-bootstrap';

const HeroTable = (props) => {
	const {
		characters,
		showRings,
		handleUseRing,
		handleKill,
	} = props;

	if (characters == null) {
		return (
			<div>Cargando datos...</div>
		)
	} else {
		return (
			<div>
				<Table responsive bordered>
					<thead>
						<tr>
							<th>Name</th>
							<th>Race</th>
							<th>Age</th>
							<th>Weapon</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{characters.map(character => (
							<HeroRow
								key={character.id}
								character={character}
								showRings={showRings}
								handleUseRing={handleUseRing}
								handleKill={handleKill}
							></HeroRow>
						))}
					</tbody>
				</Table>				
			</div>
		)
	}

}

export default HeroTable;