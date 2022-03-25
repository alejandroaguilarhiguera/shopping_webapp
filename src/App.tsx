import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Layout } from 'components';
import { Home, ListUsers, UserDetail, ListProducts, ProductDetail, LoginForm, ProductEdit, Profile, NotFound404 } from './containers';
import { API_URL, API_PREFIX, API_AUTH_LOGIN } from 'config';
import { AuthService } from 'services/API';

axios.defaults.baseURL = `${API_URL}${API_PREFIX}`;

const authService = new AuthService();

axios.interceptors.request.use(async (configAxios) => {
  
  const session = await authService.getSession();
  const { token } = session;
  if (!token) return configAxios;
  // API_AUTH_LOGIN error if i send Authorization header
  let Authorization = !configAxios?.url?.includes(API_AUTH_LOGIN) ? `bearer ${token}`:undefined   

  return {
    ...configAxios,
    headers: {
      ...configAxios.headers,
      Accept: 'application/json',
      Authorization,
    },
    validateStatus: (status: number) => status >= 200 && status <= 550,
  };
});

axios.interceptors.response.use((response: any) => {
  const { message } = response.data;
  const { status } = response;
  if (status === 200) toast.info(message);
  else if (status === 201) toast.success(message);
  else if ([401, 403].includes(status)) {
    toast.error(message);
  }
  else if ([422, 404, 409].includes(status)) toast.warning(message);
  else if (status >= 500) toast.error(message);
  else toast(message);
  return response;
}, (error: Error) => {
  toast.error('Ocurrió un error en la petición');
  return Promise.reject(error);
});
class App extends Component {




  render (): JSX.Element {
    // const user = useSelector(selectSession);

    // const dispatch = useDispatch();
    // dispatch(setUser(session.user));
    return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
      <Layout>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/products" element={<ListProducts />} />
          <Route path="/products/new" element={<ProductEdit />} />
          <Route path="/products/edit/:id" element={<ProductEdit />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/auth/login" element={<LoginForm />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </div>
    )
  }
}

export default App;
