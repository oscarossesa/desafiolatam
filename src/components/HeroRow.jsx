import React, { Component } from 'react';

class HeroRow extends Component {
   render() {
      const {
         character,
         showRings,
         handleUseRing,
         handleKill,
      } = this.props;

      return (
         <tr key={character.id} className={`character-row ${character.dead ? 'character-dead' : ''}`}>
            <td>{character.name}</td>
            <td>{character.race}</td>
            <td>{character.age}</td>
            <td>{character.weapon}</td>
            <td>
               <div className='controls'>
                  <div onClick={handleKill(character.id)}> ☠ Kill</div>
                  {showRings ?
                     <div onClick={handleUseRing(character.id)}><span role='img' aria-label='icono'>💍</span> Use Ring</div> :
                     null}
               </div>
            </td>
         </tr>
      );
   }

}

export default HeroRow;