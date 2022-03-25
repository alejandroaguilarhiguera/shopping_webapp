import React, { useEffect, useState } from 'react';
import { User } from 'types';
import './styles.css';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

import {
  useParams,
} from "react-router-dom";
import { UserService } from 'services/API';

const userService = new UserService();

export const Profile = (): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  
  
  useEffect(() => {
    userService.me().then((response) => {
      setUser(response)
      setEmail(response.email) 
      setUsername(response.email) 
    });
  },[]);
  
  function validatePasswordForm() {
    return password.length > 6 && password === confirmPassword;
  }

  async function handleChangeProfile(event: any) {
    event.preventDefault();
    
    
    // await userService.edit({
    //   email,
    //   username,
    // });


  }

  async function handleChangePassword(event: any) {
    event.preventDefault();
    // const session = await authService.login(email, password);

    // if (session?.token) {
    //   dispatch(setUser(session.user));
      
      
    //   return navigate('/home');
    //   // TODO: Agregar el ruteo
    //   // router.push(callback || '/dashboard');
    // }
  }

  return (
    <div>
      

    <Container>
      

    <Row>
    <Col></Col>
    <Col  xs={8}>

    <Card>
      <Card.Title>
        PROFILE
        
      </Card.Title>

      <Card.Body>
        
      <Form onSubmit={handleChangeProfile}>
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@domine.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </Form.Group>
        <Button
          disabled={!(email.length > 0 && username.length > 0)}
          variant="primary"
          type="submit"
        >
          update
        </Button>
      </Form>

      </Card.Body>
    </Card>
    </Col>

    <Col></Col>

    </Row>
    <Row>
    <Col></Col>

    <Col xs={8}>
    
    <Card>
      <Card.Title>
        CHANGE PASSWORD
        
      </Card.Title>

      <Card.Body>


    <Form onSubmit={handleChangePassword}>
    <Form.Group className="mb-6" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-6" controlId="confirmPassword">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>
      <Button
        disabled={!validatePasswordForm()}
        variant="primary"
        type="submit"
      >
        Change
      </Button>
    </Form>
    </Card.Body>
    </Card>
    </Col>
    <Col></Col>

    </Row>

    </Container>

    </div>
  );
};

export default Profile;
