import React from 'react'
import './vertical-menu.css'
import {Link} from "react-router-dom";

const VerticalMenu = () => {
    return (
        <nav>
            <div className="pure-menu custom-restricted-width ">
                <span className="pure-menu-heading custom-color" >Menu</span>
                <ul className="pure-menu-list ">
                    <Link to={"/home"} >
                        <li className="pure-menu-item">
                            <a href="#" className="pure-menu-link custom-color">Home</a>
                        </li>
                    </Link>
                    <Link to={"/about"} >
                        <li className="pure-menu-item">
                            <a href="#" className="pure-menu-link custom-color">About</a>
                        </li>
                    </Link>
                    <Link to={"/contact"} >
                        <li className="pure-menu-item">
                            <a href="#" className="pure-menu-link custom-color">Contact Us</a>
                        </li>
                    </Link>
                    <li className="pure-menu-item">
                        <a href="#" className="pure-menu-link custom-color">Shop</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default VerticalMenu;