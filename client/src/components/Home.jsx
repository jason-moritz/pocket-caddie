import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div className="text-center px-6 pt-10 text-lg text-gray-100">
            Hello. I'm the pocket caddie for you and your golfing buddies! Start by adding some players and courses and let's get hacking.. I mean playing better golf!
            </div>
            <div className="flex mt-10 justify-center">
                <div className="w-3/4 flex-col text-green-lt">
                    <Link to="/addplayer">
                        <button className="w-full border-4 rounded-2xl py-5 mb-5 border-gray-md  hover:bg-gray-md transform hover:scale-105 transition duration-400" >Add Player</button>
                    </Link>
                    <Link to="/addcourse">
                        <button className=" w-full border-4 rounded-2xl p-5 mb-5  border-gray-md  hover:bg-gray-md transform hover:scale-105 transition duration-400">Add Course</button>
                    </Link>
                    <Link to="/caddie">
                        <button className=" w-full border-4 rounded-2xl p-5  border-gray-md  hover:bg-gray-md transform hover:scale-105 transition duration-400">Caddie</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
