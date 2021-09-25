import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div className="text-center px-6 pt-10 text-xl text-gray-100 md:text-4xl">
            Hello. I'm the pocket caddie for you and your golfing buddies! Start by adding some players and courses and let's get hacking.. I mean playing better golf!
            </div>
            <div className="flex mt-10 justify-center">
                <div className="w-1/2 flex-col text-green-lt text-xl font-semibold max-w-2xl md:w-1/5 md:text-3xl">
                    <Link to="/caddie">
                        <button className=" w-full border-4 rounded-2xl p-5 mb-5 border-gray-md  hover:bg-gray-md transform hover:scale-105 transition duration-400">Caddie</button>
                    </Link>
                    <Link to="/scorecard">
                        <button className=" w-full border-4 rounded-2xl p-5 mb-5 border-gray-md  hover:bg-gray-md transform hover:scale-105 transition duration-400">Play Round</button>
                    </Link>
                    
                    <Link to="/addplayer">
                        <button className="w-full border-4 rounded-2xl py-5 mb-5 border-gray-md  hover:bg-gray-md transform hover:scale-105 transition duration-400" >Add Player</button>
                    </Link>
                    <Link to="/addcourse">
                        <button className=" w-full border-4 rounded-2xl p-5 mb-5  border-gray-md  hover:bg-gray-md transform hover:scale-105 transition duration-400">Add Course</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}
