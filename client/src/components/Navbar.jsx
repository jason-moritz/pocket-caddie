import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle((prevToggle) => !prevToggle);
    }

    return (
        <header> 
            <div className="container flex place-content-between  px-4 py-3 font-semibold">
                <div>Pocket Caddie</div>        
                <div className="flex place-content-end">
                    <button onClick={handleClick} class="h-6 w-6 fill-current text-gray-300 hover: text-gray-100 focus:text-gray-100 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {toggle === false ?
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            :
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            };
                        </svg>
                    </button>
                </div>
            </div>
            {toggle === true ?  
                <div className="px-2 pt-2 pb-4">
                    <Link onClick={handleClick} className="block px-2 py-1 font-semibold hover:bg-gray-800 rounded" to="/">Home</Link>
                    <Link onClick={handleClick} className="block px-2 py-1 font-semibold hover:bg-gray-800 rounded" to="/players">Players</Link>
                    <Link onClick={handleClick} className="block px-2 py-1 font-semibold hover:bg-gray-800 rounded" to="/courses">Courses</Link>
                    <Link onClick={handleClick} className="block px-2 py-1 font-semibold hover:bg-gray-800 rounded" to="/addplayer">Add Player</Link>
                    <Link onClick={handleClick} className="block px-2 py-1 font-semibold hover:bg-gray-800 rounded" to="/addcourse">Add Course</Link>
                </div>
            :
                null}
        </header>
    )
}
