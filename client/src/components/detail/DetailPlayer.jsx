import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchDetails } from "../../services";
import DisplayYardages from "../display/DisplayYardages";
import ButtonDelete from "../buttons/ButtonDelete";
import ButtonBack from "../buttons/ButtonBack";
import ButtonEdit from "../buttons/ButtonEdit";
import DisplayPrevRounds from "../display/DisplayPrevRounds";


export default function PlayerDetail() {
    const [playerDetails, setPlayerDetails] = useState({});
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const getDetails = async() => {
            setPlayerDetails(await fetchDetails("players", id));
        };
        getDetails();
    }, [id]);

    const handleToggle = (e) => {
        e.preventDefault();

        setToggle((prevToggle) => !prevToggle);
    };

    const handleToggle2 = (e) => {
        e.preventDefault();

        setToggle2((prevToggle2) => !prevToggle2);
    };

    if (!playerDetails) return <h2>Loading</h2>

    return (
        <div>
            <ButtonBack />
            <div className="flex flex-col items-center h-screen w-screen">
                <div className="flex flex-row justify-center w-3/4 h-1/3 sm:h-1/4 sm:w-1/3 md:h-72 md:w-96 rounded-md border-4 border-gray-100">
                    <div className="flex flex-col items-center justify-items-center h-full w-1/2">
                        <div className="w-full h-3/4 flex justify-center sm-down:items-start sm:items-center overflow-hidden">
                            <img 
                                className="h-40 w-40 object-cover object-center md:rounded-md md:border-4  md:border-green-lt" 
                                src={playerDetails?.playerImage} 
                                alt="profile-pic" 
                            />
                        </div>
                        <div className="w-full h-1/4 md:h-10 flex mt-2 md:mt-0 justify-center items-center">
                            <div className="mr-2 mb-2 md:mb-0">
                                <Link 
                                    key={id} 
                                    to={`/players/${id}/edit`}
                                >
                                    <ButtonEdit />
                                </Link>
                            </div>
                            <div className="ml-2 mb-2 md:mb-0">
                                <ButtonDelete 
                                    id={id} 
                                    group="players" 
                                    title={playerDetails?.playerName} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-items-center justify-center h-full w-1/2 pt-4 sm:pt-14 px-2 text-center  text-gray-100">
                        <div className="flex flex-col h-full items-center mb-2 md:mb-0">
                            <h2 className="text-2xl sm:text-3xl md:text-5xl">{playerDetails?.playerName}</h2>
                            <h4 className="text-lg sm:text-xl md:text-2xl">Handicap: {playerDetails?.handicap}</h4>
                        </div>
                    </div>
                </div>
                <div className="flex place-content-center text-lg sm:text-2xl">
                    <button 
                        className=" text-green-lt  hover:text-green-dk  focus:text-green-dk" 
                        onClick={handleToggle}
                        disabled={toggle2 === true}
                    >
                        {toggle === false ? "Click to view yardages" : "Hide yardages"}
                    </button>
                </div>
                <div className="flex place-content-center text-lg sm:text-2xl">
                    <button 
                        className=" text-green-lt hover:text-green-dk  focus:text-green-dk" 
                        onClick={handleToggle2}
                        disabled={toggle === true}
                    >
                        {toggle2 === false ? "Click to view previous rounds" : "Hide rounds"}
                    </button>
                </div>
                <div className="mt-4 flex justify-center">
                    {toggle === true && toggle2 === false ? 
                    <div className="flex flex-col place-items-center">
                        <DisplayYardages />
                        <div className="w-full text-gray-100">
                            <div className="text-center text-xl sm:text-2xl transform hover:scale-125  hover:text-gray-300  focus:text-gray-300 focus:outline-none">
                                <Link key={id} to={`/players/${id}/yardages`}>Edit Yardages</Link>
                            </div>
                        </div>
                    </div>
                    :
                    null}
                </div>
                <div className="mt-4 flex justify-center">
                    {toggle2 === true && toggle === false ? 
                    <div className="flex flex-col place-items-center">
                        <DisplayPrevRounds />
                    </div>
                    :
                    null}
                </div>
            </div>
            
            
        </div>
    )
}

