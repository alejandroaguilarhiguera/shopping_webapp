import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
// import 'styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ProductService, OrderService } from 'services/API';
import { selectProducts, selectOrder } from 'store';
import { setProducts } from 'store/slices/products';
import { setOrder } from 'store/slices/order';
import {CardProduct} from 'components';

const productService = new ProductService();
const orderService = new OrderService();

export const Home = (): JSX.Element => {
  const [productName, setProductName] = useState<string>('');
  const dispatch = useDispatch();
  useEffect(() => {
    productService.getAll().then((response) => dispatch(setProducts(response.data)))
    orderService.findOrCreate().then((orderLocalStore) => dispatch(setOrder(orderLocalStore)))
  },[dispatch, productService, orderService]);
  const products = useSelector(selectProducts);
  const order = useSelector(selectOrder);





  return (
    <div>
      <Row>
        {
          products?.map((product) => (
            <Col id={'ProductId_'+product.id} key={product.id} xs={3}>
              <CardProduct
              order={order}
              product={product} />
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default Home;
