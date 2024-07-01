import React, { useState } from 'react';
import state1 from '../images/state1.png';
import state2 from '../images/state2.png';
import state3 from '../images/state3.png';
import back from '../images/back.png';
import { useDispatch } from 'react-redux';
import { setLink } from '../store/actions';
import { Container, Row, Col, Card } from 'react-bootstrap';

const sources = [
	{
	  website: "Pitchup.com",
	  url: "https://www.pitchup.com",
	  date: "June 30, 2024",
	},
	{
	  website: "Booking.com",
	  url: "https://www.booking.com",
	  date: "June 30, 2024",
	},
	{
	  website: "Google Maps",
	  url: "https://maps.google.com",
	  date: "June 30, 2024",
	},
];
  

const WebsiteData = () => {
  
  const dispatch = useDispatch();

  return (
    <Container style={{color: 'white'}}>
		<div id="titleState">
        <img src={back} alt="state image 1" 
            className='imageinvert cursor' 
            onClick={() => dispatch(setLink(''))}
            style={{width: '35px', height: '35px', alignSelf: 'center'}}/>
        <h2 id="" style={{color: 'white', alignSelf: 'center', marginLeft: '10px'}}>State data</h2>
      </div>
      <Row className="mb-4">
        <Col>
          <h1>Campground Data Sources</h1>
          <p>
            The campground data was compiled from various reliable sources to ensure accuracy and comprehensiveness.
            Below is a list of websites used to gather the information, along with the date the data was accessed.
          </p>
        </Col>
      </Row>
      <Row>
        {sources.map((source, index) => (
          <Col md={4} key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{source.website}</Card.Title>
                <Card.Text>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">{source.url}</a>
                </Card.Text>
                <Card.Text>Date Accessed: {source.date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WebsiteData;
