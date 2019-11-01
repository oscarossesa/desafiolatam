import React from 'react';
import HeroRow from './HeroRow';

const HeroTable = (props) => {

	const {
		characters,
		handleKillCharacter,
		handleUseRing,
		showRings,
	} = props;

	if (characters.length === 0) {
		return <div>Cargando datos...</div>
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
							handleKillCharacter={handleKillCharacter}
							handleUseRing={handleUseRing}
							showRings={showRings}
						></HeroRow>
					))}
				</tbody>
			</table>
		)
	}
}

export default HeroTable;