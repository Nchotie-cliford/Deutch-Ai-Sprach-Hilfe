import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
        <nav className="flex justify-between items-center">
            <div className="text-lg font-bold">Deutsch Sprach Hilfe</div>
            <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">Meine Kurse</Link></li>
            <li><Link to="/contact" className="hover:underline">Live Class</Link></li>
            <li><Link to="/resources" className="hover:underline">Exercises</Link></li> 
            <li><Link to="/forum" className="hover:underline">Wortschats</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/register" className="hover:underline">Register</Link></li>
            <li><Link to="/profile" className="hover:underline">Profile</Link></li>
            <li><Link to="/logout" className="hover:underline">Logout</Link></li>  
            </ul>
        </nav>
        </header>
    );
    }

    export default Header;
