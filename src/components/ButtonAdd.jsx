import React from 'react';
import {
	Button,
} from 'react-bootstrap';

const ButtonAdd = (props) => {
   return <div>
      <Button variant="primary" size="lg" block onClick={props.handleAdd}>
         {props.text}
      </Button>
   </div>
}

export default ButtonAdd;