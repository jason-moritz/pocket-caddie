import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchDetails } from "../../services";
import ButtonBack from "../buttons/ButtonBack";
import ButtonEdit from "../buttons/ButtonEdit";
import ButtonDelete from "../buttons/ButtonDelete";
import DisplayHole from "../display/DisplayHole";



export default function DetailPrevRound() {
    const [roundDetails, setRoundDetails] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const getDetails = async() => {
            setRoundDetails(await fetchDetails("scores", id));
        };
        getDetails();
    }, [id]);

    const { 
        h1, 
        h2, 
        h3, 
        h4, 
        h5, 
        h6, 
        h7, 
        h8, 
        h9, 
        h10, 
        h11, 
        h12, 
        h13, 
        h14, 
        h15, 
        h16, 
        h17, 
        h18, 
        front9, 
        back9, 
        total 
    } = roundDetails;
    
    if (!roundDetails) return <h2>Loading</h2>

    return (
        <div className="text-gray-100">
            <ButtonBack />
            <div className="text-center text-2xl my-4 sm:text-4xl">
                <div>Course: {roundDetails?.courseName}</div>
            </div>
            <div className="flex flex-row justify-center md:flex-col">
                <div className="flex flex-col items-center px-4 md:flex md:flex-row justify-center">
                    <DisplayHole 
                        title="Hole 1" 
                        score={h1} 
                    />
                    <DisplayHole 
                        title="Hole 2" 
                        score={h2} 
                    />
                    <DisplayHole 
                        title="Hole 3" 
                        score={h3} 
                    />
                    <DisplayHole 
                        title="Hole 4" 
                        score={h4} 
                    />
                    <DisplayHole 
                        title="Hole 5" 
                        score={h5} 
                    />
                    <DisplayHole 
                        title="Hole 6" 
                        score={h6} 
                    />
                    <DisplayHole 
                        title="Hole 7" 
                        score={h7} 
                    />
                    <DisplayHole 
                        title="Hole 8" 
                        score={h8} 
                    />
                    <DisplayHole 
                        title="Hole 9" 
                        score={h9} 
                    />
                    <div className="text-green-lt">
                        <DisplayHole 
                            title="Front 9" 
                            score={front9} 
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center px-4 md:flex-row md:justify-center">
                    <DisplayHole 
                        title="Hole 10" 
                        score={h10} 
                    />
                    <DisplayHole 
                        title="Hole 11" 
                        score={h11} 
                    />
                    <DisplayHole 
                        title="Hole 12" 
                        score={h12} 
                    />
                    <DisplayHole 
                        title="Hole 13" 
                        score={h13} 
                    />
                    <DisplayHole 
                        title="Hole 14" 
                        score={h14} 
                    />
                    <DisplayHole 
                        title="Hole 15" 
                        score={h15} 
                    />
                    <DisplayHole 
                        title="Hole 16" 
                        score={h16} 
                    />
                    <DisplayHole 
                        title="Hole 17" 
                        score={h17} 
                    />
                    <DisplayHole 
                        title="Hole 18" 
                        score={h18} 
                    />
                    <div className="text-green-lt">
                        <DisplayHole 
                            title="Back 9" 
                            score={back9} 
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-4 text-green-lt">
                <DisplayHole 
                    title="Total" 
                    score={total} 
                />
            </div>
            <div className="flex justify-center">
                <Link to={`/rounds/${id}/edit`}>
                    <ButtonEdit />
                </Link>
                <ButtonDelete 
                    id={id} 
                    group="scores" 
                    title="Round"
                />
            </div>
        </div>
    )
}
