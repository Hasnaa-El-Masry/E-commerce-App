import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './UI/Loading'
import useFetch from '../hooks/useFetch'

const ShowProducts = ({ filter, onFilter }) => {
    return (

        <>

            <div className="buttons d-flex justify-content-center mb-3 pb-3" onClick={onFilter}>
                <button type="button" className="btn btn-outline-secondary me-2">All</button>
                <button type="button" className="btn btn-outline-secondary me-2">Men's Clothing</button>
                <button type="button" className="btn btn-outline-secondary me-2">Women's Clothing</button>
                <button type="button" className="btn btn-outline-secondary me-2">Jewelery</button>
                <button type="button" className="btn btn-outline-secondary me-2 ">Electronics</button>
            </div>

            {filter.map(product => (

                <div className="col-md-3 mb-3" key={product.id}>
                    <div className="card p-3">
                        <img src={product.image} className="card-img-top" alt={product.title} height='250px' />
                        <div className="card-body text-center h-100">
                            <h5 className="card-title">{product.title.substr(0, 12)}...</h5>
                            <p className="card-text lead fw-bolder">{product.price} $</p>
                            <Link to={`/products/${product.id}`} className="btn btn-outline-primary">Buy Now</Link>
                        </div>
                    </div>
                </div>

            ))

            }

        </>

    )
}

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);

    const { loading, getRequest } = useFetch();

    const onSuccess = (data)=>{
        setData(data.slice())
        setFilter(data)
    }

    useEffect(() => {

        getRequest({url:"https://fakestoreapi.com/products",payload:null, onSuccess});

    }, []);

    const filterhandler = (e) => {

        const cat = e.target.innerText.toLowerCase();

        if (cat === 'all') {
            setFilter(data);
            return;
        }

        const updatedList = data.filter(product => product.category == cat);
        setFilter(updatedList)

    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='text-center display-6 fw-bolder'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading num={4} /> : <ShowProducts onFilter={filterhandler} filter={filter} />}
                </div>
            </div>
        </div>
    )
}

export default Products