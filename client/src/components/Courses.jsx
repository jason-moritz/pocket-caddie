import { useState, useEffect } from "react";
import { getCourses } from "../services";


export default function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const listCourses = async() => {
            setCourses(await getCourses());
        };
        listCourses();
    },[]);

    if (!courses) return <h1>Loading</h1>

    return (
        <div className="object-center text-center">
        <h1>Courses</h1>
        <div className="grid grid-cols-2">
            {courses.map((course) => (
                <div className="grid grid-cols-1 justify-items-center">
                    <img className="max-h-30" src={course.fields?.courseImage} key={course.id} alt="course-scorecard"/>
                    <h3>{course.fields?.courseName}</h3>
                </div>
            ))};
        </div>
    </div>
    )
}
