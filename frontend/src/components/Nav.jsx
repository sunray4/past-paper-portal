import React from "react"

export default function Nav() {
    return (
        <nav className="flex justify-between items-center p-4 bg-[#1E1E1E] opacity-75 text-white shadow-md">
        <div className="flex items-center justify-center space-x-2">
            {/* <img src="static/assets/logo.png" alt="logo" class="w-10 h-10" /> */}
            <span class="website-name">Past Paper</span>
                </div>

        <ul className="flex space-x-4">
            <li><a href="templates/index.html">Home</a></li>
            <li><a href="#">Share Exercise</a></li>
            {/* <li><a href="#">Services</a></li> */}
            {/* <li><a href="#">Contact</a></li> */}
        </ul>
    </nav>
    )
}