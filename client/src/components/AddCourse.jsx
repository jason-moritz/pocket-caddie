import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addNew } from "../services";
import { toast } from "react-toastify";
import CourseForm from "./PlayerForm";
import "react-toastify/dist/ReactToastify.css";


export default function AddCourse() {
    const [courseName, setCourseName] = useState("");
    const [courseImage, setCourseImage] = useState("");
    const [rating, setRating] = useState(null);
    const [slope, setSlope] = useState(null);
    const history = useHistory();

    const fields = {
        courseName,
        courseImage,
        rating,
        slope,
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const res = await addNew(fields);
        toast(`You have added ${courseName}!`);
        history.push("/");
    }


    return (
        <div>
            <CourseForm 
                courseName={courseName} 
                setCourseName={setCourseName} 
                courseImage={courseImage} 
                setCourseImage={setCourseImage} 
                rating={rating} 
                setRating={setRating} 
                slope={slope} 
                setSlope={setSlope}
            /> 
        </div>
    )
}
