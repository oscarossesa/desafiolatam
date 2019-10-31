import React, { Component } from 'react'

class FormAdd extends Component {
   render() {
      const {
         handleChange,
      } = this.props;

      return (
         <form>
            <div className="row form-row">
               <div className="col-md-6 top-margin-xs">
                  <input type="text" className="form-control" placeholder="Nombre" onChange={(event) => { handleChange(event.target.value, 'name') }} />
               </div>
               <div className="col-md-6 top-margin-xs">
                  <input type="text" className="form-control" placeholder="Raza" onChange={(event) => { handleChange(event.target.value, 'race') }} />
               </div>
            </div>
            <div className="row form-row">
               <div className="col-md-6 top-margin-xs">
                  <input type="text" className="form-control" placeholder="Edad" onChange={(event) => { handleChange(event.target.value, 'age') }} />
               </div>
               <div className="col-md-6 top-margin-xs">
                  <input type="text" className="form-control" placeholder="Weapon" onChange={(event) => { handleChange(event.target.value, 'weapon') }} />
               </div>
            </div>
         </form>
      )
   }
}

export default FormAdd