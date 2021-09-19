import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div className="text-center px-6 mt-5">
            Hello. I'm the pocket caddie for you and your golfing buddies! Start by adding some players and courses and let's get hacking.. I mean playing better golf!
            </div>
            <div className="flex mt-10 justify-center  ">
                <div className="w-3/4 flex-col">
                    <Link to="/addplayer">
                        <button className="w-full border-4 rounded-2xl py-5 mb-5  hover:bg-gray-800" >Add Player</button>
                    </Link>
                    <Link to="/addcourse">
                        <button className=" w-full border-4 rounded-2xl p-5 mb-5  hover:bg-gray-800">Add Course</button>
                    </Link>
                    <Link to="/clubselector">
                        <button className=" w-full border-4 rounded-2xl p-5  hover:bg-gray-800">Caddie</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
