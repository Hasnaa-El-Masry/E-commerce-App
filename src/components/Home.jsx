import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div>
            <div className="card bg-dark text-white rounded-0">
                <img className="card-img" src="/assets/bg.jpg" alt="Card image" height='565px' style={{opacity:'.7'}} />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text fs-3 lead">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>

            <Products/>
        </div>
    )
}

export default Home