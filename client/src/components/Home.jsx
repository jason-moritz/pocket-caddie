import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="h-full">
            <div className="text-center px-6">
            Hello. I'm the pocket caddie for you and your golfing buddies! Start by adding some player info and let's get hacking.. I mean playing better golf!
            </div>
            <div className="flex flex-col items-center content-center">
                <Link className="border-2" to="/addplayer"><button>Add Player</button></Link>
                <Link className="border-2" to="/addcourse"><button>Add Course</button></Link>
            </div>
        </div>
    )
}
