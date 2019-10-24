import React, { Component } from 'react'
import {
   Form,
   Col,
   Row,
} from 'react-bootstrap';

class FormAdd extends Component {
   render() {
      const {
         handleChange,
      } = this.props;

      return (
         <Form>
            <Form.Group as={Row} controlId="formPlaintextName">
               <Form.Label column sm="2">
                  Nombre
               </Form.Label>
               <Col sm="10">
                  <Form.Control type="text" placeholder="Nombre" onChange={(event) => { handleChange(event.target.value, 'name') }} />
               </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextRace">
               <Form.Label column sm="2">
                  Raza
               </Form.Label>
               <Col sm="10">
                  <Form.Control type="text" placeholder="Raza" onChange={(event) => { handleChange(event.target.value, 'race') }} />
               </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextAge">
               <Form.Label column sm="2">
                  Edad
               </Form.Label>
               <Col sm="10">
                  <Form.Control type="text" placeholder="Edad" onChange={(event) => { handleChange(event.target.value, 'age') }} />
               </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextWeapon">
               <Form.Label column sm="2">
                  Weapon
               </Form.Label>
               <Col sm="10">
                  <Form.Control type="text" placeholder="Weapon" onChange={(event) => { handleChange(event.target.value, 'weapon') }} />
               </Col>
            </Form.Group>
         </Form>
      )
   }
}

export default FormAdd