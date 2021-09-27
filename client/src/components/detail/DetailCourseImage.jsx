import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../../services";
import ButtonBack from "../buttons/ButtonBack";

export default function DetailScorecard() {
    const [courseImage, setCourseImage] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getCourseImage = async() => {
            setCourseImage(await fetchDetails("courses", id));
        };
        getCourseImage();
    },[id]);

    if (!courseImage) return <h2>Loading</h2>

    return (
        <div className="text-gray-100">
            <ButtonBack />
            <div className="flex place-content-center rounded-sm p-4">
                <img 
                    className="flex-shrink-0" 
                    src={courseImage?.courseImage} 
                    alt="scorecard" 
                />
            </div>
        </div>
    )
}
