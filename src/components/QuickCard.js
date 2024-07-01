import React from 'react';
import Card from 'react-bootstrap/Card';

const QuickCard = ({ name, region, latitude, longitude, comments }) => {
    return (
        <Card style={{ width: '90%', margin: '1rem', opacity: '85%' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{region}</Card.Subtitle>
                <Card.Text>
                    <strong>Coordinates:</strong> {latitude}, {longitude}
                </Card.Text>
                <Card.Text>
                    <strong>Comments:</strong> {comments}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default QuickCard;