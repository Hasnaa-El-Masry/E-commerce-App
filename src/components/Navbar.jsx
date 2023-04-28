import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const cart = useSelector(state => state.cart);
    const cartItemsQuantity = cart.length > 0 ? cart.reduce((total, num) => total+num.qty, 0) : 0;

    return (
        <nav className="nav navbar navbar-expand-lg bg-body-tertiary shadow-sm">
            <div className="container-fluid">

                <a className="navbar-brand" href="#">E-Mart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact">Contanct</NavLink>
                        </li>
                    </ul>
                    <div className="buttons">

                        <Link className="btn border me-1" to='/cart'>
                            <i className='fa fa-shopping-cart me-2'></i>
                            Cart ({cartItemsQuantity})
                        </Link>
                        <Link className="btn border me-1" to='/register'>
                            <i className='fa fa-user-plus me-2'></i>
                            Register
                        </Link>


                        <Link className="btn border" to='/login'>
                            <i className='fa fa-sign-in me-2'></i>
                            login
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar