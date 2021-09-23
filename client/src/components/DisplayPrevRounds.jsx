import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
            <div>Previous Rounds</div>
            {prevRounds.map((prevRound) => (
                prevRound.fields?.playerID === id ?
                    <div>
                        <h2>{prevRound.fields?.courseName}: {prevRound.fields?.total}</h2>
                    </div>
                :
                null
            ))}
        </div>
    )
}
