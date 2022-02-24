import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom' ;
import './Header.css' ;


const Header = (props) => {

    const handleLogout = () => {
        sessionStorage.setItem('logintoken', "undefined")
        props.history.push('/')
    }


    return (
        <nav className="navbar sticky-top navbar-expand-md bg-dark navbar-dark">
            <Link to='/musichome' className="navbar-brand"> SkyBEAT </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav mr-auto">
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    {
                        sessionStorage.getItem('logintoken') !== "undefined" ?
                        <button onClick={handleLogout} className='btn' id="logout" >Logout</button>
                        : null
                    }
                </form>
            </div>
        </nav>
    )
}

export default withRouter(Header);