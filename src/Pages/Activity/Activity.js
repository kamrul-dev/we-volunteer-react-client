import React from 'react';
import { Card } from 'react-bootstrap';
import './Activity.css';

const Activity = ({ activity }) => {
    const { _id, actTitle, img } = activity;

    return (
        <div className='col-md-6 col-lg-3 d-flex align-items-center justify-content-center'>
            <Card className='card-container border-0'>
                <Card.Img variant="top" className='img-fluid' src={img} />
                <Card.Body className='title-container'>
                    <Card.Title>{actTitle}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Activity;