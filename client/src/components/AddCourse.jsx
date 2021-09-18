import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addCourse } from "../services";
import { toast } from "react-toastify";
import FormCourse from "./FormCourse";
import "react-toastify/dist/ReactToastify.css";


export default function AddCourse() {
    const [courseName, setCourseName] = useState("");
    const [courseImage, setCourseImage] = useState("");
    const [rating, setRating] = useState("");
    const [slope, setSlope] = useState("");
    const history = useHistory();

    const fields = {
        courseName,
        courseImage,
        rating,
        slope,
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const res = await addCourse(fields);
        toast(`You have added ${courseName}!`);
        history.push("/");
    }

    return (
        <div>
            <FormCourse 
                courseName={courseName} 
                setCourseName={setCourseName} 
                courseImage={courseImage} 
                setCourseImage={setCourseImage} 
                rating={rating} 
                setRating={setRating} 
                slope={slope} 
                setSlope={setSlope}
                handleSubmit={handleSubmit}
            /> 
        </div>
    )
}
