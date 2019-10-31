import React from 'react';
import HeroRow from './HeroRow';

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
			<table className="table table-sm">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Raza</th>
						<th>Edad</th>
						<th>Arma</th>
						<th>Acciones</th>
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
			</table>
		)
	}

}

export default HeroTable;