import { Button, Row, Col } from 'react-bootstrap';
import { Product } from 'types';
import { useDispatch } from 'react-redux';
import { delProduct } from '../store/slices/products';
import { ProductService } from '../services/API';

interface Props {
  product: Product,
}

const productService = new ProductService()



export const ProductItem = (props: Props): JSX.Element => {
  const {product} = props;
  const dispatch = useDispatch();

  const onDelete = async (id: number) => {
    await productService.delete(id);
    dispatch(delProduct(id))
  }

  return (
    <Row style={{ marginTop: '10px'}}>
        <Col>
          <a href={'products/'+product.id}>
            {product.attributes.name}
          </a>
        </Col>
        <Col>
        <a href={'products/edit/'+ product.id}>
          <Button variant="primary">
              Editar
          
          </Button>
          </a>
          <Button style={{ marginLeft: '30px'}} variant='danger' onClick={() => onDelete(product.id)}>
              Eliminar
          </Button>
        </Col>
    </Row>

  );
};

export default ProductItem;
