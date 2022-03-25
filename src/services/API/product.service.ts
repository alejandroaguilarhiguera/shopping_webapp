import { Product, ProductCreationAttributes } from 'types';
import { GetAPI, PostAPI, PutAPI, DeleteAPI } from 'utils/requests';
import { API_PRODUCTS } from 'config/index';

interface ResponseProducts {
  data: Product[],
  meta: {
    pagination: {
      page: number,
      pageSize: number,
      pageCount: number,
      total: number,
    }
  }
}

interface ResponseProduct {
  data: Product,
}
export class ProductService {
  // eslint-disable-next-line
  constructor() {}
  getAll(): Promise<ResponseProducts> {
    return GetAPI(API_PRODUCTS);
  }
  show(id: Product['id']): Promise<ResponseProduct> {
    return GetAPI(`${API_PRODUCTS}/${id}`);
  }
  async add(product: ProductCreationAttributes): Promise<ResponseProduct> {
    const data = await PostAPI(API_PRODUCTS, { data: product } );
    return data;
  }
  async edit(id: Product['id'], attributes: Partial<Product['attributes']>): Promise<ResponseProduct> {
    const data = await PutAPI(`${API_PRODUCTS}/${id}`, {
      data: {
        name: attributes.name,
        description: attributes.description,
      }
    });
    return data;
  }
  delete(id: Product['id']): Promise<boolean> {
    return DeleteAPI(`${API_PRODUCTS}/${id}`);
  }
}

export default ProductService;
