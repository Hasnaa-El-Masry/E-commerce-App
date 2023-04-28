import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const Loading = () => {
    return (
        <>
            <div className="col-5">
                <Skeleton height={400} />
            </div>
            <div className="col-7" style={{ lineHeight: 3 }}>
                <Skeleton height={40} width={200} />
                <Skeleton height={100} />
                <Skeleton height={40} width={200} />
                <Skeleton height={50} width={200} />
                <Skeleton height={100} />
            </div>
        </>
    )
}

const ShowProduct = ({ product, onAdd }) => {

    if (product) return (
        <>
            <div className="col-lg-5 text-center">
                <img src={product.image} alt={product.title} width={'400px'} height={'400px'} />
            </div>
            <div className="col-lg-7  mt-5">

                <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                <h1 className="card-title fw-bolder display-5 mb-2">{product.title}</h1>
                <p className="lead fw-bold my-3">
                    Rating {product.rating && product.rating.rate} {' '}
                    <i className='fa fa-star' style={{ color: 'orange' }}></i>
                </p>
                <h4 className="fw-bolder my-4 display-6">${product.price} </h4>
                <p className="lead">{product.description}</p>

                <button className="btn btn-outline-secondary me-3" onClick={onAdd}>Add To Cart</button>
                <Link to='/cart' className="btn btn-secondary">Go To Cart</Link>

            </div>
        </>
    )
}

const Product = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState();
    const { loading, getRequest: getProduct } = useFetch();

    const onSuccess = (data) => {
        setProduct(data)
    }

    useEffect(() => {

        getProduct({ url: `https://fakestoreapi.com/products/${id}`, payload: null, onSuccess })

    }, [])

    const onAddToCart = (product) => {
        dispatch(addToCart( product ));
    }

    if (id) {

        return (
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowProduct product={product} onAdd={() => onAddToCart(product)} />}
                </div>
            </div>
        )

    }


}

export default Product