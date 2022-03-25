import React, { useEffect, PropsWithChildren } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Container } from 'react-bootstrap';
import { selectSession, selectOrder } from 'store';
import { delUser, setUser } from 'store/slices/session';
import { AuthService } from 'services/API';
// import Image from 'next/image';
// import styles from 'styles/Home.module.css';
import { Menu,TopMenu, Footer } from 'components';

const authService = new AuthService();

interface Props {
  // TODO: Add elements
}

export const Layout = (prop: PropsWithChildren<Props>): JSX.Element => {
  const { children } = prop;
  const dispatch = useDispatch();
  const user = useSelector(selectSession);
  const order = useSelector(selectOrder);

  useEffect(() => {
    authService.getSession().then((session) => session && dispatch(setUser(session.user)));
  }, [user]);


  return (
    <div className="bg-gray-100">

{ process.env.NODE_ENV !== 'production' &&  <Alert variant="warning">
  <Alert.Heading>{process.env.NODE_ENV}</Alert.Heading>
    <p>
      {JSON.stringify(user)}
    </p>
    {
      order && (
        <p className="mb-0">
          order: {JSON.stringify(order)}
        </p>
      )
    }
  </Alert>
}

      <TopMenu />
      <div >
        <Menu />
        <Container>
          {children}
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
