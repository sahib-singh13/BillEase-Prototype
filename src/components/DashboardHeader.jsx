import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; // Import the user icon
import UserDropdown from './UserDropdown';


const DashboardHeader = () => {
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const userDropdownRef = useRef(null);

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };

    const closeUserDropdown = (e) => {
        if (
            userDropdownRef.current &&
            !userDropdownRef.current.contains(e.target)
        ) {
            setIsUserDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', closeUserDropdown);
        return () => {
            document.removeEventListener('mousedown', closeUserDropdown);
        };
    }, []);
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/logo-orange.png"
                            className="mr-3 h-16"
                            alt="logo"
                        />
                        <h1>BILLEASE</h1>
                    </Link>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive
                                                ? 'text-orange-700'
                                                : 'text-gray-700'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive
                                                ? 'text-orange-700'
                                                : 'text-gray-700'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li className="relative" ref={userDropdownRef}>
                                <button
                                    onClick={toggleUserDropdown}
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                >
                                    <FaUser className="h-5 w-5" />
                                </button>

                                   <UserDropdown
                                        isOpen={isUserDropdownOpen}
                                        onClose={() => setIsUserDropdownOpen(false)}
                                    />

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default DashboardHeader;