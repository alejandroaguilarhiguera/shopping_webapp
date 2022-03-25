import React from 'react';

import moment from 'moment';
import request from 'supertest';
import faker from 'faker';
import { rest } from 'msw';
import { setupServer } from 'msw/node'
import { Provider } from 'react-redux';
import { shallow, mount, render } from 'enzyme';
import Home from './';
import { Product } from 'types';
import store from 'store';
import app from '../../App';


export const handlers = [
    rest.get('/api/products', (req, res, ctx) => {
      return res(ctx.json({
        data: [
          {
            id: 6,
            attributes: {
              name: "manzana",
              createdAt: "2022-03-20T07:40:47.333Z",
              updatedAt: "2022-03-20T20:10:33.235Z",
              locale: "en",
              description: "Fruta roja dulce",
              price: 25
            }
          },
          {
            id: 9,
            attributes: {
              name: "Platanos",
              createdAt: "2022-03-20T07:44:07.246Z",
              updatedAt: "2022-03-20T20:10:04.892Z",
              locale: "en",
              description: "Fruta amarilla dulce",
              price: 30
            }
          }
        ],
        meta: {
          pagination: {
            page: 1,
            pageSize: 25,
            pageCount: 1,
            total: 2
          }
        }
      }), ctx.delay(150))
    })
  ]
  
const server = setupServer(...handlers)

describe('<Home />', () => {
  let products: Product[] = [];
  
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  const AppWrapper = (): JSX.Element => {
    return (
      <Provider store={store} ><Home /></Provider>
    )
  }



  test('Render', async () => {
    const utils = render(<AppWrapper />);
    expect(utils.find('Row')).not.toBeDefined();
    utils.html()
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