import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
                <Link to="/" className="flex items-center">
                    <img
                        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                        className="mr-3 h-12"
                        alt="Logo"
                    />
                </Link>
                <div className="flex-1 flex justify-center items-center">
                    <ul className="flex space-x-4">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${
                                        isActive ? "text-orange-700" : "text-gray-700"
                                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${
                                        isActive ? "text-orange-700" : "text-gray-700"
                                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${
                                        isActive ? "text-orange-700" : "text-gray-700"
                                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/github"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${
                                        isActive ? "text-orange-700" : "text-gray-700"
                                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Github
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center lg:order-2">
                    <Link
                        to="#"
                        className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Log in
                    </Link>
                    <Link
                        to="#"
                        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Get started
                    </Link>
                </div>
            </nav>
        </header>
    );
}
