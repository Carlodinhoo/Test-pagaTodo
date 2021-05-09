import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../img/logo-pagatodo.png'
import '../css/Style.css'

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-pagatodo-green">
            <Link className="navbar-brand" to="/">
                <img className="img-responsive" width="50px" height="auto" alt="logo" src={Logo}/>
            </Link>
        </div>
    )
}

export default Navbar
