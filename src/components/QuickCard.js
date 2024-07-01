import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { deleteWays } from '../store/actions';
import { useDispatch } from 'react-redux';

const QuickCard = ({ name, region, latitude, longitude, comments }) => {

    const dispatch = useDispatch()
    const [deleting, setDeleting] = useState(false);

    const deleteW = () => {
        setDeleting(true)
        setTimeout(() => {
            dispatch(deleteWays([latitude, longitude]));
        }, 400);
        
    }

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
                <Card.Footer>
                    <ButtonGroup className="d-flex d-md-none flex-column">
                        <Button variant="primary" className="mb-2">Details</Button>
                        <Button variant={deleting ? "error" : "secondary"} 
                                onClick={() => deleteW()}
                                className="mb-2">
                                    { deleting ? 
                                        "deleting..."
                                        :
                                        "delete"
                                    }
                                
                        </Button>
                        <Button variant="success">Map</Button>
                    </ButtonGroup>
                    <ButtonGroup className="d-none d-md-flex justify-content-around">
                        <Button variant="primary">Details</Button>
                        <Button 
                            onClick={() => deleteW()}
                            variant="secondary">Delete</Button>
                        <Button variant="success">Map</Button>
                    </ButtonGroup>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
};

export default QuickCard;