import { Product } from 'types';
import fetcher from '../fetcher';

const getProducts = async (): Promise<{ products: { data: Product[] } } > => {
  const data = await fetcher(`
    query {
      products {
        data {
            id
            attributes {
                ...ProductContent     
            }
        }
      }
    }
  `);
  return data;
};

export default getProducts;
