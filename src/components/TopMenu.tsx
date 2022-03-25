import { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Badge, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Cart4, GearWide } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import { selectSession, selectOrder } from 'store';
import { delUser, setUser } from 'store/slices/session';
import { AuthService } from 'services/API';
import { APP_NAME } from 'config';
import iconMenu from '@/../../public/icon_menu.png';

const authService = new AuthService();


export const TopMenu = (): JSX.Element => {
  const user = useSelector(selectSession);
  const order = useSelector(selectOrder);
  const dispatch = useDispatch();
  
  async function onLogout() {
    await authService.logout();
    dispatch(delUser());
  }


  return (
    <Navbar bg="light" expand="lg">



{/* <Navbar>
  <Container>
    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    <Navbar.Toggle />

  </Container>
</Navbar> */}


      
    <Container>
      <Navbar.Brand href="/home">{APP_NAME}</Navbar.Brand>
      <Navbar.Brand>
        {/* <Cart4 /><Badge bg="primary">{ order?.attributes?.items?.length || 0 }</Badge> */}
        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          { user && <Nav.Link href="/products">Products</Nav.Link> }
          { user && <Nav.Link href="/buys">Buys</Nav.Link> }
          { !user && <Nav.Link href="/auth/login">Login</Nav.Link> }
          { !user && <Nav.Link href="/auth/sign-up">Sign up</Nav.Link> }
          { user && <NavDropdown title="Settings" id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/auth/login" onClick={onLogout}>Leave</NavDropdown.Item>
          </NavDropdown>
          }
        </Nav>
      </Navbar.Collapse>

      {/* {user && <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{user?.email}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      } */}

    </Container>
  </Navbar>
  );
};

export default TopMenu;
