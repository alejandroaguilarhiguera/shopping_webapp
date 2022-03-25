import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductService } from 'services/API/product.service';
import { ProductItem } from 'components';
import { addProduct, setProducts } from 'store/slices/products';
import { selectProducts } from 'store';

const  productService = new ProductService();

export const ListProducts = (): JSX.Element => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState<string>('');
  const products = useSelector(selectProducts);

  async function handleSubmit(event: any) {
    event.preventDefault();
    const response = await productService.add({ name: productName });
    dispatch(addProduct(response.data));
    setProductName('');
  }
  useEffect(() => {
    productService.getAll().then((response) => dispatch(setProducts(response.data)))
  },[dispatch, productService]);


  return (
    <div>
      <h1>
        ListProducts
      </h1>
      {/* <form onSubmit={handleSubmit}>
        <input onChange={(e) => setProductName(e.target.value)}  value={productName}/>
        <button type='submit'>Agregar</button>
      </form> */}
      <ul>
        {
          products?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        }
      </ul>
    </div>
  );

};

export default ListProducts;
