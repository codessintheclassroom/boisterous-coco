import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col, CardColumns } from 'react-bootstrap';
import PetCard from './PetCard';
import Pet from './Pet';

const App: React.FC = () => {
  const [pets, setPets] = useState<Array<Pet>>([]);
  useEffect(() => {
    const updatePets = async () => {
        const response = await fetch(`https://codess-shelter.azurewebsites.net/api/v1/pets`);
        const pets = await response.json();
        setPets(pets);
    };

    updatePets();
  }, []);

  return (
    <Container>
      <Row>
      <Col>
        <CardColumns>
        {
          pets.map((pet) => <PetCard key={pet.id} pet={pet} />)
        }
        </CardColumns>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
