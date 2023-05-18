import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            {/*Left side of navbar */}
            <ul>
                <li>
                    <NavLink to="/">
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothes">
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics">
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/furnitures">
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/toys">
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/others">
                        Others
                    </NavLink>
                </li>
            </ul>

            {/*Rigth side of navbar */}
            <ul>
                <li>
                    yo@gmail.com
                </li>
                <li>
                    <NavLink to="/my-orders">
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account">
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sing-in">
                        Sing In
                    </NavLink>
                </li>

            </ul>

        </nav >



    )
}

export default Navbar
