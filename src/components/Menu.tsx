import iconHome from '../../public/icon_home.png';
import iconExit from '../../public/icon_exit.png';
import iconProduct from '../../public/icon_products.png';
import { AuthService } from '../services/API';

const authService = new AuthService();
export const Menu = (): JSX.Element => {
  async function onLogout() {
    await authService.logout();
  }

  // const { data: session = {} } = useSWR(
  //   'session',
  //   () => authService.getSession().then((data) => data),
  // );

  // if (!session) return <div />;
  return (
    <>
    </>

  );
};

export default Menu;
