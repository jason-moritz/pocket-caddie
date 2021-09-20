import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DisplayYardages from "./DisplayYardages";
import DeleteButton from "./DeleteButton";
import { fetchPlayerDetails } from "../services";


export default function PlayerDetail() {
    const [playerDetails, setPlayerDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getDetails = async() => {
            setPlayerDetails(await fetchPlayerDetails(id));
        };
        getDetails();
    }, [id]);

    if (!playerDetails) return <h2>Loading</h2>

    return (
        <div className="flex flex-col">
            <div className="flex flex-col-wrap">
                <div className="p-4 h-2/4 w-2/4 overflow-hidden ">
                    <img className="h-full w-full rounded-md object-cover object-center" src={playerDetails?.playerImage} alt="profile-pic" />
                </div>
                <div className="flex flex-col mt-8 ml-6">
                    <h2>{playerDetails?.playerName}</h2>
                    <h4>Handicap: {playerDetails?.handicap}</h4>
                </div>
            </div>
            <div className="flex w-full">
                <div className="flex w-1/2 place-content-center">
                    <div>
                        <Link key={id} to={`/players/${id}/edit`}>
                            <button className="h-8 w-8 transform hover:scale-125  hover:text-indigo-200  focus:text-gray-100 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <div>
                        <DeleteButton id={id} group="players" title={playerDetails?.playerName} />
                    </div>
                </div>
            </div>
            <div>
                <DisplayYardages />
                <Link key={id} to={`/players/${id}/yardages`}>Edit Yardages</Link>
            </div>
        </div>
    )
}
