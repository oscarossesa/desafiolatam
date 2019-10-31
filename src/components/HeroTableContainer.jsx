import React from 'react';
import HeroTable from './HeroTable';

const HeroTableContainer = (props) => {
	const {
		characters,
		showRings,
		handleChange,
		handleAdd,
		handleUseRing,
		handleKill,
	} = props;

	if (characters == null) {
		return (
			<div>Cargando datos...</div>
		)
	} else {
		return (<>
			<HeroTable
				characters={characters}
				showRings={showRings}
				handleUseRing={handleUseRing}
				handleKill={handleKill}
				handleChange={handleChange}
				handleAdd={handleAdd} />
		</>
		)
	}

}

export default HeroTableContainer;