import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle((prevToggle) => !prevToggle);
    };

    return (
        <header className="text-green-lt"> 
            <div className="flex place-content-between content-center px-4 py-3 ">
                <Link className="flex items-center" to="/">
                    <div className="hover:text-green-dk text-3xl text-transparent font-semibold bg-clip-text bg-gradient-to-tr  from-gray-100 to-green-lt">Pocket Caddie</div>
                </Link>        
                <div className="flex place-content-end md:place-content-start">
                    <div className="flex flex-row-reverse p-2 text-green-lt text-2xl md-down:hidden">
                        <Link onClick={handleClick} className="block px-2 py-1 font-semibold  hover:text-green-dk rounded" to="/">Home</Link>
                        <Link onClick={handleClick} className="block px-2 py-1 font-semibold  hover:text-green-dk rounded" to="/caddie">Caddie</Link>
                        <Link onClick={handleClick} className="block px-2 py-1 font-semibold  hover:text-green-dk rounded" to="/scorecard">Play Round</Link>
                        <Link onClick={handleClick} className="block px-2 py-1 font-semibold  hover:text-green-dk rounded" to="/players">Players</Link>
                        <Link onClick={handleClick} className="block px-2 py-1 font-semibold  hover:text-green-dk rounded" to="/courses">Courses</Link>
                        <Link onClick={handleClick} className="block px-2 py-1 font-semibold  hover:text-green-dk rounded" to="/addplayer">Add Player</Link>
                        <Link onClick={handleClick} className="block px-2 py-1 font-semibold  hover:text-green-dk rounded" to="/addcourse">Add Course</Link>
                        
                    </div>
                    <button onClick={handleClick} class="md:hidden h-7  w-7 fill-current transform hover:scale-125 transition duration-400 text-green-lt hover: text-geen-dk  focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <div className="px-2 pt-2 pb-4 text-green-lt text-lg md:hidden">
                    <Link onClick={handleClick} className="block px-2 py-1 font-semibold hover:bg-gray-lt rounded" to="/">Home</Link>
                    <Link onClick={handleClick} className="block px-2 py-1 font-semibold hover:bg-gray-lt rounded" to="/caddie">Caddie</Link>
                    <Link onClick={handleClick} className="block px-2 py-1 font-semibold hover:bg-gray-lt rounded" to="/scorecard">Play Round</Link>
                    <Link onClick={handleClick} className="block px-2 py-1 font-semibold hover:bg-gray-lt rounded" to="/players">Players</Link>
                    <Link onClick={handleClick} className="block px-2 py-1 font-semibold hover:bg-gray-lt rounded" to="/courses">Courses</Link>
                    <Link onClick={handleClick} className="block px-2 py-1 font-semibold hover:bg-gray-lt rounded" to="/addplayer">Add Player</Link>
                    <Link onClick={handleClick} className="block px-2 py-1 font-semibold hover:bg-gray-lt rounded" to="/addcourse">Add Course</Link>
                   
                </div>
            :
                null
            }
        </header>
    )
}
