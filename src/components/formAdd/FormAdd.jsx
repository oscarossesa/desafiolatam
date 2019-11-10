import React, { useState } from 'react'

const FormAdd = (props) => {
  const initialFormState = { id: null, name: '', race: '', age: '', weapon: '', dead: false }
  const [character, setCharacter] = useState(initialFormState)

  // En archivo "ForAmdd.jsx", líneas 16, 22, 28 y 34, se están creado/definiendo nuevas funciones anónimas en cada "re-rendereo", es mejor usar "currying".

  const handleInputChange = (property) => (event) => {
    setCharacter({
      ...character,
      [property]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!character.name || !character.race ||
      !character.age || !character.weapon) return

    props.addCharacter(character)
    setCharacter(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-row'>
        <div className='col-md-6 top-margin-xs'>
          <input
            type='text'
            className='form-control'
            placeholder='Nombre' value={character.name}
            onChange={handleInputChange('name')}
          />
        </div>
        <div className='col-md-6 top-margin-xs'>
          <input
            type='text'
            className='form-control'
            placeholder='Raza'
            value={character.race}
            onChange={handleInputChange('race')}
          />
        </div>
      </div>
      <div className='form-row'>
        <div className='col-md-6 top-margin-xs'>
          <input
            type='text'
            className='form-control'
            placeholder='Edad'
            value={character.age}
            onChange={handleInputChange('age')}
          />
        </div>
        <div className='col-md-6 top-margin-xs'>
          <input
            type='text'
            className='form-control'
            placeholder='Arma'
            value={character.weapon}
            onChange={handleInputChange('weapon')}
          />
        </div>
      </div>
      <div className='top-margin-xs'>
        <button className='btn btn-primary btn-lg btn-block'>Agregar Heroe</button>
      </div>
    </form>
  )
}

export default FormAdd
