import React from 'react'

const HeroRowcontainer = (props) => {
  const {
    character,
    handleKillCharacter,
    handleUseRing,
    showRings
  } = props

  return (
    <div className='controls'>
      <div onClick={handleKillCharacter(character.id)}>
        <span role='img' aria-label='icono'>☠</span> Kill
      </div>
      {showRings
        ? <div onClick={handleUseRing(character.id)}><span role='img' aria-label='icono'>💍</span> Use Ring</div>
        : null}
    </div>
  )
}

export default HeroRowcontainer
