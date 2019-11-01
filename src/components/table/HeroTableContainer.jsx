import React from 'react';
import HeroTable from './HeroTable';

const HeroTableContainer = (props) => {
	const {
		characters,
		killCharacter,
		showRings,
		handleChange,
		handleAdd,
		handleUseRing,
	} = props;

	return (
		<HeroTable
			characters={characters}
			killCharacter={killCharacter}
			showRings={showRings}
			handleUseRing={handleUseRing}
			handleChange={handleChange}
			handleAdd={handleAdd} />
	)

}

export default HeroTableContainer;