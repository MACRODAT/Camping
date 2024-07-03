import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setLink, setProfile } from '../store/actions';
import { profile } from '../store/reducers';

const QuickLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.postForm('http://localhost:5000/login', {
        email: email,
        password: password
      });

      if (res.status === 200) {
        setMessage('Login successful. Redirecting...');
        let p = new profile("", email, "")
        console.log(p)
        setTimeout(() => {
          dispatch(setProfile(p)); // Example Redux action to manage redirect
          dispatch(setLink('')); // Example Redux action to manage redirect
        }, 2000);
      } else {
        setMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      console.error('Login Error:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formEmail" style={{ margin: '10px' }}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword" style={{ margin: '10px' }}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ margin: '10px' }}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default QuickLogin;
