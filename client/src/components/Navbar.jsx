import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle((prevToggle) => !prevToggle);
    }

    return (
        <header className="container flex-col items-center px-4 py-3"> 
            <div className="flex place-content-end px-4">
                <button onClick={handleClick} class="h-6 w-6 fill-current text-gray-300 hover: text-gray-100 focus:text-gray-100 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {toggle === true ?  
            <div className="px-2 pt-2 pb-4">
                <Link className="flex place-content-end block px-2 py-1 font-semibold hover:bg-gray-800 rounded"to="/">Home</Link>
                <Link className="flex place-content-end block px-2 py-1 font-semibold hover:bg-gray-800 rounded"to="/players">Players</Link>
                <Link className="flex place-content-end block px-2 py-1 font-semibold hover:bg-gray-800 rounded"to="/courses">Courses</Link>
                <Link className="flex place-content-end block px-2 py-1 font-semibold hover:bg-gray-800 rounded"to="/addplayer">Add Player</Link>
                <Link className="flex place-content-end block px-2 py-1 font-semibold hover:bg-gray-800 rounded"to="/addcourse">Add Course</Link>
            </div>
            :
            null}
        </header>
    )
}
