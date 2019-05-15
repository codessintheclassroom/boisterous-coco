import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, CardColumns } from 'react-bootstrap';
import PetCard from './PetCard';

var mockedPets = [
  { id: "1", name: "Stratos", description: "Has a good nose for truffles" },
  { id: "2", name: "Rallou", description: "A superhero (of the dog world)" },
  { id: "3", name: "Fluffy", description: "Has opinions about sausages" },
];

const App: React.FC = () => {
  return (
    <Container>
      <Row>
      <Col>
        <CardColumns>
        {
          mockedPets.map((pet) => <PetCard key={pet.id} pet={pet} />)
        }
        </CardColumns>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
