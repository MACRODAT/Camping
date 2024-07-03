import React from 'react';
import { Container, Row, Col, Jumbotron, Button, Card, CardGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setLink } from '../store/actions';
import downArrow from '../images/down-arrow.png';
import camper from '../images/van.jpg';
import map from '../images/map.avif';

const LandingPage = () => {
  const dispatch = useDispatch();

  return (
    <div className='w-100 h-100' style={{backgroundColor: "#ffffff", overflowY: 'scroll', color: '#112109'}}>
      <div className="text-center bg-primary text-white py-5">
        <Container style={{transform: "translateX(-20%)"}}>
          <h1>Welcome to Camps</h1>
          <p style={{fontStyle:"italic"}}>Just select your destination, we'll pick your camps along the way.</p>
          <Button 
            variant="light" 
            onClick={() => dispatch(setLink(""))}
            href="#features">Start now</Button>
        </Container>
        <Container style={{marginTop: '20px', transform: "translateX(20%)"}}>
          <h4>Or scroll below !</h4>
          <p style={{fontStyle:"italic"}}>And discover the features available to use in Camps.</p>
          <img src={downArrow} id="jiggler" alt=""  style={{filter: "invert(1)", width: "100px"}}/>
        </Container>
      </div>

      <Container id="about" className="my-5 w-100" style={{minHeight: '60%'}}>
        <Row>
          <Col>
            <img src={camper} className='d-none d-md-block' alt="" style={{float: "right", margin: '10px', maxWidth: '60%', maxHeight: '80%'}} />
            <h2>About Camps</h2>
            <p style={{fontSize: '23px'}}>
              Camping is all about planning and preparing in advance. We gather data, to our best efforts, to ensure the best itinerary
              your travel in Morocco, with the safest of camps and routes, and ultimately the best experience.
              It's as simple as selecting your starting city and destination, and the rest is for the algorithm to figure (*).
            </p>
          </Col>
        </Row>
      </Container>
      <Container id="about" className="my-5 w-100" style={{minHeight: '60%'}}>
        <Row>
          <Col>
            <img src={map} className='d-none d-md-block' alt="" style={{float: "left", margin: '10px', maxWidth: '60%', maxHeight: '80%'}} />
            <h2>It's all yours</h2>
            <p style={{fontSize: '23px'}}>
              You can adjust the itinerary proprosed as you desire. You can remove campgrounds from the waypoints, and save the results
              in your account. Finally, you can print the map and the campgrounds or download these on a PDF format, all is your choice.
            </p>
          </Col>
        </Row>
      </Container>

      <Container id="features" className="my-5">
        <h2 className="text-center mb-4">Features</h2>
        <CardGroup>
          <Card className="mx-2">
            <Card.Body>
              <Card.Title>Intuitive</Card.Title>
              <Card.Text>
                Just what you do for a plain map: a starting place and a destination.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-2">
            <Card.Body>
              <Card.Title>Simple</Card.Title>
              <Card.Text>
                The layout and informations are laid to be as simple as possible.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-2">
            <Card.Body>
              <Card.Title>Endless journeys</Card.Title>
              <Card.Text>
                You can adjust your journey and stays as you want.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>

      <Container id="contact" className="my-5">
        <Row>
          <Col>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or need further information, feel free to contact us. We are here to help!
              Email: younessf31@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
      <Container id="contact" className="my-5">
        <Row>
          <Col>
            <p style={{fontStyle: 'italic'}}>
              (*) Information provided is on your sole responsability. Please double check 
              validity and availability of suggested camps before proceeding.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
