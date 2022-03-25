import React from 'react';
import moment from 'moment';
import request from 'supertest';
import faker from 'faker';
import { rest } from 'msw';
import { setupServer } from 'msw/node'
import store from 'store';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { shallow, mount, render } from 'enzyme';
import enzyme from 'enzyme';
import LoginForm from './';
import { Product } from 'types';
import app from '../../App';

// export const handlers = [
//   rest.post('/api/auth/login', (req, res, ctx) => {
//     return res(ctx.json({
//       jwt: 'asfsd',
//       user: {
//         id: 1,
//         email: 'email@gmail.com',
//       }
//     }), ctx.delay(150))
//   })
// ];
  
const setUp = () => (
  <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)




// const server = setupServer(...handlers)

describe('<LoginForm />', () => {
  let utils: enzyme.ReactWrapper;
  let btnEnter: enzyme.ReactWrapper;
  let txtEmail: enzyme.ReactWrapper;
  let txtPassword: enzyme.ReactWrapper;



  beforeAll(() => {
    utils = mount(shallow(setUp()).get(0));
    btnEnter = utils.find('button[type="submit"]');
    txtEmail = utils.find('input[type="email"]').at(0);
    txtPassword = utils.find('input[type="password"]');
    // txtEmail.instance().value = 'hahaha2';
    // txtEmail.simulate('change');

    // txtEmail.simulate('focus');
    // txtEmail.simulate('change', { target: { value: 'test@gmail.com' } });
    // txtEmail.simulate('keyDown', {
    //   which: 27,
    //   target: {
    //     blur() {
    //       // Needed since <EditableText /> calls target.blur()
    //       txtEmail.simulate('blur');
    //     },
    //   },
    // });
  });
  // beforeAll(() => server.listen())
  // afterEach(() => server.resetHandlers())
  // afterAll(() => server.close())


  test('Render', async () => {
    console.log(utils.debug());
    // expect(utils.).toEqual('hahaha')
    console.log(txtEmail.get(0).props.value);
    // console.log(btnSubmit)
    btnEnter.simulate('click');
    expect(btnEnter.text()).toBe('Enter');
    // expect(utils).toMatchSnapshot();
    expect(1).toBe(1);
    // const products = await request(app)
    // .get("/api/products")
    // .set("User-Agent", "supertest")
    // .expect(200)
    // .then((res) => {
    //     expect(res.body.words).toBe(3);
    // });

    // products.forEach((product) => {
    //     expect(utils.find('ProductId_'+ product.id).text()).toContain('div3');

    // });
    
  });
});