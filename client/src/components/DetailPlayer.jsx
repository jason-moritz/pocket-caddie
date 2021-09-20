import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DisplayYardages from "./DisplayYardages";
import ButtonDelete from "./ButtonDelete";
import ButtonBack from "./ButtonBack";
import ButtonEdit from "./ButtonEdit";
import { fetchPlayerDetails } from "../services";


export default function PlayerDetail() {
    const [playerDetails, setPlayerDetails] = useState({});
    const [toggle, setToggle] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const getDetails = async() => {
            setPlayerDetails(await fetchPlayerDetails(id));
        };
        getDetails();
    }, [id]);

    const handleToggle = (e) => {
        e.preventDefault();

        setToggle((prevToggle) => !prevToggle);
    };


    if (!playerDetails) return <h2>Loading</h2>

    return (
        <div>
            <ButtonBack />
            <div className="flex flex-col-wrap">
                <div className="p-4 h-2/4 w-2/4 max-h-1/4  max-w-xs overflow-hidden">
                    <img className="h-full w-full rounded-md object-cover object-center" src={playerDetails?.playerImage} alt="profile-pic" />
                </div>
                <div className="flex flex-col mt-8 pl-4 items-center  text-gray-100">
                    <h2 className="text-5xl">{playerDetails?.playerName}</h2>
                    <h4 className="text-xl md:text-2xl">Handicap: {playerDetails?.handicap}</h4>
                </div>
            </div>
            <div className="flex w-full border-b-4 border-gray-100 rounded-md">
                <div className="flex w-2/4 max-w-xs justify-center">
                    <div className="mr-2 mb-2">
                        <Link key={id} to={`/players/${id}/edit`}>
                            <ButtonEdit />
                        </Link>
                    </div>
                    <div className="ml-2 mb-2">
                        <ButtonDelete id={id} group="players" title={playerDetails?.playerName} />
                    </div>
                </div>
            </div>
            
            <div className="flex place-content-center">
                <button className="h-8 w-8 transform hover:scale-125  text-green-lt hover:text-green-dk  focus:text-green-dk focus:outline-none" onClick={handleToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {toggle === false ? 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        :
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        }
                    </svg>
                </button>
            </div>
            {toggle === true ? 
                <div className="flex flex-col place-items-center">
                    <DisplayYardages />
                    <div className="w-full text-gray-100">
                        <div className="text-center transform hover:scale-125  hover:text-gray-300  focus:text-gray-300 focus:outline-none">
                            <Link key={id} to={`/players/${id}/yardages`}>Edit Yardages</Link>
                        </div>
                    </div>
                </div>
            :
                null}
        </div>
    )
}

