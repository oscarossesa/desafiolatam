import React from 'react'
import { Card } from 'react-bootstrap'
import Navigations from '../navigations'

const Locations = (props) => {
  return <>
    <Navigations /><br></br>
    Locations
    {/* {props.locations.map(location =>
      <Card style={{ width: '18rem', padding: '20px' }}>
        <Card.Body>
          <Card.Title>{location.ciudad}</Card.Title>
          <Card.Text>
            {location.descripcion}
          </Card.Text>
        </Card.Body>
      </Card>
    )} */}
  </>
}

export default Locations