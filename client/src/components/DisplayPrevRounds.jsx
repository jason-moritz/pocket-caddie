import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchList } from "../services";


export default function DisplayPrevRounds() {
    const [prevRounds, setPrevRounds] = useState("");
    const { id } = useParams();
    
    useEffect(() => {
        const getPrevRounds = async() => {
            setPrevRounds(await fetchList("scores"));
        };
        getPrevRounds();
    }, []);

    console.log(prevRounds)

    if (!prevRounds) return <h2>Loading</h2>

    return (
        <div>
            <div className="text-lg md:text-xl">Previous Rounds</div>
            <div className="overflow-hidden w-full ">
                <div className="h-24 w-full overflow-scroll">
                {prevRounds.map((prevRound) => (
                    prevRound.fields?.playerID === id ?
                        <Link key={id} to={`/rounds/${prevRound.id}`}>
                        <div className="md:text-lg">
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
