import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="text-3xl p-10 text-right space-x-3">
                <Link to="/">Home</Link>
                <Link to="/players">Players</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/addplayer">Add Player</Link>
                <Link to="/addcourse">Add Course</Link>
        </div>
    )
}
