import React from 'react';
import HeroRowControls from './HeroRowControls';

const HeroRow = (props) => {
   const { character, handleKill, handleUseRing, showRings } = props;

   return (
      <tr key={character.id} className={`character-row ${character.dead ? 'character-dead' : ''}`}>
         <td>{character.name}</td>
         <td>{character.race}</td>
         <td>{character.age}</td>
         <td>{character.weapon}</td>
         <td>
            <HeroRowControls 
               character={character}
               handleKill={handleKill}
               handleUseRing={handleUseRing}
               showRings={showRings}
            ></HeroRowControls>
         </td>
      </tr>
   );
}

export default HeroRow;