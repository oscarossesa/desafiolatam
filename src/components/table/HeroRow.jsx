import React from 'react'
import HeroRowControls from './HeroRowControls'

const HeroRow = (props) => {
  const {
    character,
    handleKillCharacter,
    handleUseRing,
    showRings
  } = props

  return (
    <tr key={character.id} className={`character-row ${character.dead ? 'character-dead' : ''}`}>
      <td>{character.name}</td>
      <td>{character.race}</td>
      <td>{character.age}</td>
      <td>{character.weapon}</td>
      <td>
        <HeroRowControls
          character={character}
          handleKillCharacter={handleKillCharacter}
          handleUseRing={handleUseRing}
          showRings={showRings}
        />
      </td>
    </tr>
  )
}

export default HeroRow
