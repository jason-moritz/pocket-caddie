import { useState } from "react";
import { Link } from "react-router-dom";



export default function Home() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = (e) => {
        e.preventDefault();

        setToggle((prevToggle) => !prevToggle);
    };

    return (
        <div className="flex flex-col items-center w-screen">
            <div className="flex flex-col items-center text-center w-full px-8 pt-10 text-xl text-gray-100 sm:text-4xl sm:w-full sm:px-40 sm:pb-10">
                Hello. I'm the pocket caddie for you and your golfing buddies! Start by adding some players and courses and let's get hacking.. I mean playing better golf!
                <button className="h-8 w-8 block text-green-lt mt-4 sm:hidden" onClick={handleToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            {toggle === true ? 
                <div className="text-gray-100 text-base text-green-lt text-center w-full px-8 sm:hidden mt-4">
                    Note - You need to add player yardages before using the caddie function. These can be added by selecting a player and selecting edit yardages.
                </div>
            :
                null
            }
            <div className="mt-10 w-full flex justify-center">
                <div className="w-full flex flex-col items-center  text-green-lt text-xl font-semibold sm:text-3xl sm:flex-row">
                    <div className="flex flex-col w-3/4 sm:w-1/2 sm:mx-6">
                        <Link className="sm:flex sm:justify-end" to="/addplayer">
                            <button className="w-full sm:w-1/2 border-4 rounded-2xl py-5 mb-5 border-gray-md  hover:bg-gray-md transform hover:scale-105 transition duration-400" >Add Player</button>
                        </Link>
                        <Link className="sm:flex sm:justify-end" to="/round">
                            <button className="w-full sm:w-1/2 border-4 rounded-2xl p-5 mb-5 border-gray-md  hover:bg-gray-md transform hover:scale-105 transition duration-400">Play Round</button>
                        </Link>
                    </div>
                    <div className="flex flex-col w-3/4 sm:w-1/2 md:mx-6">
                        <Link className="sm:flex sm:justify-start" to="/addcourse">
                            <button className=" w-full sm:w-1/2 border-4 rounded-2xl p-5 mb-5  border-gray-md  hover:bg-gray-md transform hover:scale-105 transition duration-400">Add Course</button>
                        </Link>
                        <Link className="sm:flex sm:justify-start" to="/caddie">
                            <button className=" w-full sm:w-1/2 border-4 rounded-2xl p-5 mb-5 border-gray-md  hover:bg-gray-md transform hover:scale-105 transition duration-400">Caddie</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-gray-100 text-base sm:text-2xl mt-16 md-down:hidden">
                Note - You need to add player yardages before using the caddie function. These can be added by selecting a player and selecting edit yardages.
            </div>
        </div>
    )
}
