import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchList } from "../../services";


export default function DisplayPrevRounds() {
    const [prevRounds, setPrevRounds] = useState("");
    const { id } = useParams();
    
    useEffect(() => {
        const getPrevRounds = async() => {
            setPrevRounds(await fetchList("scores"));
        };
        getPrevRounds();
    }, [id]);

    console.log(prevRounds)

    if (!prevRounds) return <h2>Loading</h2>

    return (
        <div className="flex flex-col text-gray-100 items-center w-full">
            <div className="text-2xl sm:text-3xl">
                Previous Rounds
            </div>
            <div>
                <div>
                {prevRounds.map((prevRound) => (
                    prevRound.fields?.playerID === id ?
                        <Link 
                            key={id} 
                            to={`/rounds/${prevRound.id}`}
                        >
                        <div className="text-xl my-2 hover: text-gray-300 sm:text-2xl">
                            <h2>{prevRound.fields?.courseName}: {prevRound.fields?.total}</h2>
                        </div>
                        </Link>
                    :
                    null
                ))}
                </div>
            </div>
        </div>
    )
}
