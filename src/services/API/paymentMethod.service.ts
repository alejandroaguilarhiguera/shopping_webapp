import { PaymentMethod, NewPaymentMethod } from 'types';
import { API_PAYMENT_METHODS } from 'config/index';
import { GetAPI, PostAPI, DeleteAPI } from 'utils/requests';

export class PaymentMethodService {
  // eslint-disable-next-line
  constructor() {}
  getAll(): Promise<PaymentMethod[]> {
    return GetAPI(API_PAYMENT_METHODS);
  }
  show(id: number): Promise<PaymentMethod> {
    return GetAPI(`${API_PAYMENT_METHODS}/${id}`);
  }
  async add(product: NewPaymentMethod): Promise<PaymentMethod> {
    const data = await PostAPI(API_PAYMENT_METHODS, product);
    return data.product;
  }
  async edit(id: number): Promise<number> {
    return DeleteAPI(`${API_PAYMENT_METHODS}/${id}`);
  }
}

export default PaymentMethodService;
