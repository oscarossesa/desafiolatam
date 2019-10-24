import React, { Component } from 'react'

class FormAdd extends Component {
   render() {
      const {
         handleChange,
      } = this.props;

      return (
         <form>
            <label>Name</label>
            <input
               type='text'
               name='name'
               placeholder='Nombre'
               onChange={(event) => { handleChange(event.target.value, 'name') }} />
            <label>Race</label>
            <input 
               type='text'
               name='race' 
               placeholder='Race' 
               onChange={(event) => { handleChange(event.target.value, 'race') }} />
            <label>Age</label>
            <input 
               type='text'
               name='age' 
               placeholder='Age' 
               onChange={(event) => { handleChange(event.target.value, 'age') }} /> 
            <label>Weapon</label>
            <input 
               type='text'
               name='weapon' 
               placeholder='Weapon' 
               onChange={(event) => { handleChange(event.target.value, 'weapon') }} />
         </form>
      )
   }
}

export default FormAdd