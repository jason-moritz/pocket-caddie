import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchCourseDetails, editCourse } from "../services";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function EditCourse() {
    const [courseName, setCourseName] = useState("");
    const [courseImage, setCourseImage] = useState("");
    const [rating, setRating] = useState("");
    const [slope, setSlope] = useState("");
    const history = useHistory();
    const { id } = useParams();

    const fields = {
        courseName,
        courseImage,
        rating,
        slope,
    }

    useEffect(() => {
        const getDetails = async() => {
            let res = await fetchCourseDetails(id);
            setCourseName(res.courseName);
            setCourseImage(res.courseImage);
            setRating(res.rating);
            setSlope(res.slope);
        };
        getDetails();
    }, []);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const res = await editCourse(id, fields);
        toast(`You have editted ${courseName}'s info!`);
        history.push(`/courses/${id}`);
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
                handleSubmit={handleSubmit}
                title="Edit Course Info"
            /> 
        </div>
    )
}
