import React, { useState } from 'react'

const FormAdd = (props) => {

   const initialFormState = { id: null, name: '', race: '', age: '', weapon: '', dead: false }
   const [character, setCharacter] = useState(initialFormState)

   const handleInputChange = (value, property) => {
      setCharacter({
         ...character,
         [property]: value
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
         <div className="form-row">
            <div className="col-md-6 top-margin-xs">
               <input type="text" className="form-control" placeholder="Nombre" value={character.name} onChange={(event) => { handleInputChange(event.target.value, 'name') }} />
            </div>
            <div className="col-md-6 top-margin-xs">
               <input type="text" className="form-control" placeholder="Raza" value={character.race} onChange={(event) => { handleInputChange(event.target.value, 'race') }} />
            </div>
         </div>
         <div className="form-row">
            <div className="col-md-6 top-margin-xs">
               <input type="text" className="form-control" placeholder="Edad" value={character.age} onChange={(event) => { handleInputChange(event.target.value, 'age') }} />
            </div>
            <div className="col-md-6 top-margin-xs">
               <input type="text" className="form-control" placeholder="Weapon" value={character.weapon} onChange={(event) => { handleInputChange(event.target.value, 'weapon') }} />
            </div>
         </div>
         <div className="top-margin-xs">
            <button className="btn btn-primary btn-lg btn-block">Agregar Heroe</button>
         </div>
      </form>
   )
}

export default FormAdd