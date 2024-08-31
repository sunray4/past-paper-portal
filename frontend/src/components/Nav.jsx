import React from "react"
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="flex justify-between items-center p-4 bg-[#1E1E1E] opacity-75 text-white shadow-md">
        <div className="flex items-center justify-center space-x-2">
            {/* <img src="static/assets/logo.png" alt="logo" class="w-10 h-10" /> */}
            <span className="website-name">Past Paper</span>
                </div>

        <ul className="flex space-x-7 mr-10">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/share-exercise">Share Exercise</Link></li>
        {/* <li><Link to="/">Home</Link></li> */}
        </ul>
    </nav>
    )
}