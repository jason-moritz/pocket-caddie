import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addNew } from "../../services";
import { toast } from "react-toastify";
import FormCourse from "../forms/FormCourse";
import ButtonBack from "../buttons/ButtonBack";
import "react-toastify/dist/ReactToastify.css";


export default function AddCourse() {
    const [courseName, setCourseName] = useState("");
    const [courseImage, setCourseImage] = useState("");
    const [rating, setRating] = useState("");
    const [slope, setSlope] = useState("");
    const [location, setLocation] = useState("");
    const history = useHistory();

    const fields = {
        courseName,
        courseImage,
        rating,
        slope,
        location,
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        await addNew("courses", fields);
        toast(`You have added ${courseName}!`);
        history.push("/");
    }

    return (
        <div className="text-gray-100">
            <ButtonBack />
            <div className="flex flex-col items-center">
                <h2 className="text-center mb-5 text-4xl sm:text-5xl">Add a new course!</h2>
                <FormCourse 
                    courseName={courseName} 
                    image={courseImage}
                    setCourseName={setCourseName} 
                    courseImage={courseImage} 
                    setCourseImage={setCourseImage} 
                    rating={rating} 
                    setRating={setRating} 
                    slope={slope} 
                    setSlope={setSlope}
                    location={location}
                    setLocation={setLocation}
                    handleSubmit={handleSubmit}
                    title="Add Course"
                /> 
            </div>
        </div>
    )
}
