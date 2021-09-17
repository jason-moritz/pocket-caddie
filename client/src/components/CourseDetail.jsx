import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCourseDetails } from "../services";

export default function CourseDetail() {
    const [courseDetails, setCourseDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getDetails = async() => {
            setCourseDetails(await fetchCourseDetails(id));
        };
        getDetails();
    }, []);

    if (!courseDetails) return <h2>Loading</h2>

    return (
        <div className="grid grid-cols-1">
            <h2>{courseDetails?.courseName}</h2>
            <img src={courseDetails?.courseImage} alt="score-card" />
            <h4>Rating: {courseDetails?.rating}</h4>
            <h4>Slope: {courseDetails?.slope}</h4>
            <Link key={id} to={`/courses/${id}/edit`}><button>Edit Course Info</button></Link>
        </div>
    )
}
