import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts} from '../store/slices/products.slice';

const Home = () => {
    const dispatch = useDispatch();

    const products = useSelector(state => state.products);

    console.log(products);

    useEffect(()=>{
        dispatch(getAllProducts())
    },[dispatch])

    return (
      <div>
        <section>
            {products.map(product=>(
                <div>
                    <h3>{product.title}</h3>
                    <img src={product.image} alt="" />
                    <p>{product.description}</p>
                </div>
            ))}
        </section>
      </div>
    );
};

export default Home;