import React, { useEffect, useState } from 'react';
import { Product } from 'types';
// import 'styles.css';
import {
  useParams,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { ProductService } from 'services/API';
import { addProduct, delProduct } from 'store/slices/products';

const productService = new ProductService();

export const ProductEdit = (): JSX.Element => {
  const {id = ''} = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();
  
  async function handleSubmit(event: any) {
    event.preventDefault();
    const response = await productService.edit(product?.id!, {
      ...product?.attributes,
      name,
    });
    toast.success('Producto actualizado con éxito');
    dispatch(delProduct(response.data.id));
    dispatch(addProduct(response.data));
    return navigate('/products');
  }


  useEffect(() => {
    productService.show(Number(id)).then((response) => {
      setProduct(response.data);
      setName(response.data.attributes.name); 
    });
  },[id]);


  
  return (
    <div>
      <h1>
        Product {id}
      </h1>
      <form onSubmit={handleSubmit}>

        <input type='text' onChange={(e) => setName(e.target.value)} value={name} />
        <button type='submit'>Guardar</button>
      </form>

    </div>
  );
};

export default ProductEdit;
