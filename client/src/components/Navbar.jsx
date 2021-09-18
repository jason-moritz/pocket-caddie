import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex items-center content-end">
            <Link to="/">Home</Link>
            <Link to="/players">Players</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/addplayer">Add Player</Link>
            <Link to="/addcourse">Add Course</Link>
            <button class="fill-current hover: text-indigo-200 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
                
        </div>
    )
}
