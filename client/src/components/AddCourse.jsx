import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addCourse } from "../services";
import { toast } from "react-toastify";
import FormCourse from "../forms/FormCourse";
import ButtonBack from "../buttons/ButtonBack";
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

        await addCourse(fields);
        toast(`You have added ${courseName}!`);
        history.push("/");
    }

    return (
        <div className="text-gray-100">
            <ButtonBack location="/" />
            <div className="flex flex-col items-center">
                <h2 className="text-center mb-5 text-4xl">Add a new course!</h2>
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
                    title="Add Course"
                /> 
            </div>
        </div>
    )
}
