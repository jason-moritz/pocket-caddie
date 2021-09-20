import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCourseDetails } from "../services";
import ButtonBack from "../buttons/ButtonBack";

export default function DetailScorecard() {
    const [scorecard, setScorecard] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getScorecard = async() => {
            setScorecard(await fetchCourseDetails(id));
        };
        getScorecard();
    },[id]);

    if (!scorecard) return <h2>Loading</h2>

    return (
        <div className="text-gray-100">
            <ButtonBack location={`/courses/${id}`} />
            <div className="flex place-content-center rounded-sm p-4">
                <img className="flex-shrink-0" src={scorecard?.courseImage} alt="scorecard"></img>
            </div>
        </div>
    )
}
