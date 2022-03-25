import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Product, Order, OrderItem } from 'types';
import { OrderService } from '../services/API';
import { API_URL } from '../config';
import { addItem, delItem } from '../store/slices/order';

interface Props {
  product: Product,
  order: Order,
}

const orderService = new OrderService()

export const CardProduct = (props: Props): JSX.Element => {
  const { product, order } = props;
  
  const dispatch = useDispatch();

  async function add(event: any) {
    event.preventDefault();
    const item = order?.attributes?.items?.find(item => item.product.data.id === product.id);
    const items = order?.attributes?.items?.filter(itemFiltered => itemFiltered.product.data.id !== product.id) || [];
    
    const orderEdited = await orderService.edit(order.id, {
      items: [
        ...items.map((item) => ({
          quantity: item.quantity,
          product: item.product.data.id,
        })),
        {
          quantity: (item?.quantity || 0) + 1,
          product: product.id,
        },
      ],
    });
    if (orderEdited) {
      const newItem = orderEdited.attributes?.items?.find(item => item.product.data.id === product.id);
      
      dispatch(delItem(newItem as OrderItem));
      dispatch(addItem(newItem as OrderItem));
      
      
    }
  }

  return (
    <Card style={{ margin: '10px' }}>
      <Card.Img
        variant="top"
        src={API_URL+''+product.attributes.image?.data.attributes.formats.thumbnail.url}
        alt={product.attributes.image?.data.attributes.alternativeText}
      />
      <Card.Body>
        <Card.Title>{product.attributes.name}</Card.Title>
        <Card.Text>
          {product.attributes.description}
        </Card.Text>
        <Button variant="primary" onClick={add}>Add to shopping car</Button>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
