import React from 'react';

const ButtonAdd = (props) => {
   return <button onClick={props.handleAdd}>{props.text}</button>;
 }

 export default ButtonAdd;