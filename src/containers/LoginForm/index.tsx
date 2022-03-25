import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Footer, InputEmail, InputPassword } from 'components/index';
import { AuthService } from 'services/API';
import { setUser } from 'store/slices/session';


const authService = new AuthService();

export interface Prop {
  callback?: string;
  username?: string;
}




const username = '';
export const LoginForm = (): JSX.Element => {
  // const router = useRouter();
  // const {
  //   callback,
  //   username = '',
  // }: Prop = router.query;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    const session = await authService.login(email, password);

    if (session?.token) {
      dispatch(setUser(session.user));
      
      
      return navigate('/home');
      // TODO: Agregar el ruteo
      // router.push(callback || '/dashboard');
    }
  }
  return (


    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
          value={email}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          data-test="txtPassword"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button
        disabled={!validateForm()}
        variant="primary"
        type="submit"
      >
        Enter
      </Button>
    </Form>


  );
};

export default LoginForm;
