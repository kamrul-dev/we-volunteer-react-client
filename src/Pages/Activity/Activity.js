import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Activity.css';

const Activity = ({ activity }) => {
    const { _id, actTitle, img } = activity;

    return (
        <div className='col-md-4 col-lg-3 g-'>
            <Card className='card-container border-0'>
                <Card.Img variant="top" className='img-fluid' src={img}/>
                <Card.Body className='title-container'>
                    <Card.Title>{actTitle}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Activity;