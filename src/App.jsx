import React, { Component } from 'react';
import './App.css';
import HeroTableContainer from './components/HeroTableContainer';
import { 
  Container,
  Row,
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1>Fellowship of the Ring</h1>
        </Row>
        <Row className="justify-content-md-center">
          <HeroTableContainer></HeroTableContainer>
        </Row>
      </Container>
    )
  }
}

export default App
