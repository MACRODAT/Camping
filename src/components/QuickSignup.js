import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setLink } from '../store/actions';

const QuickSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    terms: false
  });

  const [message, setMessage] = useState('');

  const { username, email, password, terms } = formData;
  const dispatch = useDispatch();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onCheckboxChange = e => setFormData({ ...formData, [e.target.name]: e.target.checked });

  const onSubmit = async e => {
    e.preventDefault();
    if (!terms) {
      setMessage('You must agree to the terms and conditions');
      return;
    }
    // try {
      const res = await axios.postForm('http://localhost:5000/register', 
      {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        terms: true
      }).then((res) => 
        {
          setMessage("Account was created successfully. Check your inbox. Redirecting...")
          setTimeout(() => {
            dispatch(setLink(''))
          }, 5000);
        }, (res) => {
        if (res.response.status == 505)
        {
          setMessage('Username or email already exist in the database.');
        }
        else
        {
          setMessage('Unknown server error.');
        }
      });
    // } catch (error) {
    //   setMessage('Error registering user');
    // }
  };

  return (
    <Container className="mt-5">
      <h2>Register</h2>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formUsername" style={{margin: '10px'}}>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail" style={{margin: '10px'}}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword" style={{margin: '10px'}}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formTerms" style={{margin: '10px'}}>
          <Form.Check
            type="checkbox"
            name="terms"
            checked={terms}  style={{margin: '10px'}}
            onChange={onCheckboxChange}
            label={<span>I agree to the <a href="/terms">terms and conditions</a></span>}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit"  style={{margin: '10px'}}>
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default QuickSignup;
