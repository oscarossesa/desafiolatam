import React from 'react';

const HeroRowcontainer = (props) => {
   const { character, handleKill, handleUseRing, showRings } = props;
   
   return (
      <div className='controls'>
         HeroRowControls
         <div onClick={handleKill(character.id)}> ☠ Kill</div>
         {showRings ?
            <div onClick={handleUseRing(character.id)}><span role='img' aria-label='icono'>💍</span> Use Ring</div> :
            null}
      </div>
   );
}

export default HeroRowcontainer;