import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { FaInternetExplorer } from "react-icons/fa6";

export const Header = ({ cart }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='Header'>
            <div className="logo">
                <span><FaInternetExplorer /></span>E.com
            </div>
            <div className="menu">
                <div className="desktop-menu">
                    <Link to={"/e-com"}><FaHome /> Home</Link>
                    <Link to={"/cart"}>
                        <span className='span'>{cart.length}</span> <FaCartArrowDown /> Cart
                    </Link>
                    <Link to={"/contact"}><GrContact /> Contact</Link>
                </div>
                <button className="dropdown-button" onClick={toggleDropdown}>
                    Menu
                </button>
                <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                    <Link to={"/e-com"} onClick={() => setDropdownOpen(false)}><FaHome /> Home</Link>
                    <Link to={"/cart"} onClick={() => setDropdownOpen(false)}>
                        <span className='span'>{cart.length}</span> <FaCartArrowDown /> Cart
                    </Link>
                    <Link to={"/contact"} onClick={() => setDropdownOpen(false)}><GrContact /> Contact</Link>
                </div>
            </div>
        </div>
    );
};
