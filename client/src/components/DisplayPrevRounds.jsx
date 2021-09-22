import { useState, useEffect } from "react";
import { fetchList } from "../services";


export default function DisplayPrevRounds(props) {
    const { playerID } = props;
    const [prevRounds, setPrevRounds] = useState("");
    
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
                prevRound.fields?.playerName === playerID ?
                    <div>
                        <h2>{prevRound.fields?.courseName}</h2>
                        <h2>{prevRound.fields?.courseName}</h2>
                        <h2>{prevRound.fields?.courseName}</h2>
                    </div>
                :
                null
            ))}
        </div>
    )
}
