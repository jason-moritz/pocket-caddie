import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="flex flex-col items-center w-screen">
            <div className="text-center w-full px-6 pt-10 text-xl text-gray-100 sm:text-4xl sm:w-full sm:px-40 sm:pb-10">
            Hello. I'm the pocket caddie for you and your golfing buddies! Start by adding some players and courses and let's get hacking.. I mean playing better golf!
            </div>
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
        </div>
    )
}
