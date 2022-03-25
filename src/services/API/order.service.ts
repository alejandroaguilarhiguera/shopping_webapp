import AsyncStorage from '@react-native-async-storage/async-storage';
import { Order, OrderCreationAttributes } from 'types';
import { GetAPI, PostAPI, PutAPI, DeleteAPI } from 'utils/requests';
import { API_ORDERS } from 'config/index';

interface ResponseOrders {
  data: Order[],
  meta: {
    pagination: {
      page: number,
      pageSize: number,
      pageCount: number,
      total: number,
    }
  }
}

interface ResponseOrder {
  data: Order,
}
export class OrderService {
  // eslint-disable-next-line
  constructor() {}
  async findOrCreate(): Promise<Order> {

    const orderHash = await AsyncStorage.getItem('order');
    const order: Order = orderHash ? JSON.parse(orderHash) : null;
    if (order?.id) {
      // order founded 
      const orderFounded = await GetAPI(`${API_ORDERS}/${order.id}?populate=items.product`);
      if (orderFounded?.data) {
        await AsyncStorage.setItem('order', JSON.stringify(orderFounded.data));
        return orderFounded.data;
      }
    }
      
    // create new order
    const newOrder = await PostAPI(`${API_ORDERS}?populate=items.product`, { data: { } } );
    
    if (newOrder?.data) {
      // save order in local storage
      await AsyncStorage.setItem('order', JSON.stringify(newOrder.data));
      return newOrder.data;
    }
    throw Error('Error creating order');
  }
  getAll(): Promise<ResponseOrders> {
    return GetAPI(`${API_ORDERS}?populate=items.product`);
  }
  show(id: Order['id']): Promise<ResponseOrder> {
    return GetAPI(`${API_ORDERS}/${id}?populate=items.product`);
  }
  async add(product: OrderCreationAttributes): Promise<ResponseOrder> {
    const data = await PostAPI(API_ORDERS, { data: product } );
    return data;
  }
  
  async edit(id: Order['id'], attributes: Partial<{ items: Array<{quantity: number, product: number}>}>): Promise<Order> {
    const response = await PutAPI(`${API_ORDERS}/${id}?populate=items.product`, {
      data: {
        items: attributes.items,
      }
    });
    return response.data;
  }

  delete(id: Order['id']): Promise<boolean> {
    return DeleteAPI(`${API_ORDERS}/${id}`);
  }
}

export default OrderService;
