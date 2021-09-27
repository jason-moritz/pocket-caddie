import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchDetails, editDetails } from "../../services";
import FormCourse from "../forms/FormCourse";
import ButtonBack from "../buttons/ButtonBack";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function EditCourse() {
    const [courseName, setCourseName] = useState("");
    const [courseImage, setCourseImage] = useState("");
    const [rating, setRating] = useState("");
    const [slope, setSlope] = useState("");
    const [location, setLocation] = useState("");
    const history = useHistory();
    const { id } = useParams();

    const fields = {
        courseName,
        courseImage,
        rating,
        slope,
        location,
    };

    useEffect(() => {
        const getDetails = async() => {
            let res = await fetchDetails("courses", id);
            setCourseName(res.courseName);
            setCourseImage(res.courseImage);
            setRating(res.rating);
            setSlope(res.slope);
            setLocation(res.location);
        };
        getDetails();
    }, [id]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        await editDetails("courses", id, fields);
        toast(`You have editted ${courseName}'s info!`);
        history.push(`/courses/${id}`);
    }

    return (
        <div>
            <ButtonBack location={`/courses/${id}`} />
            <div className="flex flex-col items-center text-gray-100">
                <h2 className="text-center mb-5 text-4xl">Edit Course Info</h2>
                <FormCourse 
                    courseName={courseName} 
                    setCourseName={setCourseName} 
                    setCourseImage={setCourseImage} 
                    rating={rating} 
                    setRating={setRating} 
                    slope={slope} 
                    setSlope={setSlope}
                    location={location}
                    setLocation={setLocation}
                    handleSubmit={handleSubmit}
                    title="Submit"
                /> 
            </div>
        </div>
    )
}
