import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Pet from './Pet';
  
type Props = {
    pet: Pet;
  };
  
class PetCard extends Component<Props> {
  render() {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={"https://source.unsplash.com/collection/212527/200x200/?sig=" + Math.floor(Math.random() * 100)} />
          <Card.Body>
            <Card.Title>{this.props.pet.name}</Card.Title>
            <Card.Text>{this.props.pet.breed}</Card.Text>
            <Card.Text>{this.props.pet.birthday}</Card.Text>
            <Card.Text>{this.props.pet.description}</Card.Text>
            <Button variant="primary">Adopt</Button>
          </Card.Body>
        </Card>
      );
  }
}

export default PetCard;