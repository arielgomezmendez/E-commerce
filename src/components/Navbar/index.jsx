import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeStyle = "underline underline-offset-4" // add the underline property of tailwind to show which element is currently selected

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
            {/*Left side of navbar */}
            <ul className='flex items-center gap-3'>
                {/*Shopi */}
                <li className='font-semibold'>
                    <NavLink to="/" >
                        Shopi
                    </NavLink>
                </li>
                {/*All */}
                <li>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                {/*Clothes */}
                <li>
                    <NavLink to="/clothes" className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                {/*Electronics */}
                <li>
                    <NavLink to="/electronics" className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                {/*Furnitures */}
                <li>
                    <NavLink to="/furnitures" className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                {/*Toys */}
                <li>
                    <NavLink to="/toys" className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                {/*Others */}
                <li>
                    <NavLink to="/others" className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>

            {/*Rigth side of navbar */}
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    yo@gmail.com
                </li>
                {/*My orders */}
                <li>
                    <NavLink to="/my-orders" className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                {/*My Account */}
                <li>
                    <NavLink to="/my-account" className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                {/*Sing in */}
                <li>
                    <NavLink to="/sing-in" className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Sing In
                    </NavLink>
                </li>
                <li>
                    🛒0
                </li>

            </ul>

        </nav >



    )
}

export default Navbar
