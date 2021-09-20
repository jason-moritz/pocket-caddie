import { useState, useEffect } from "react";
import { getCourses } from "../services";
import { Link } from "react-router-dom";


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
            <h1 className="text-4xl">Courses</h1>
            <div className="flex flex-col flex-wrap">
                {courses.map((course) => (
                    <>
                        <Link class="flex flex-col items-center pt-2" to={`/courses/${course.id}`}>
                            <div className="block h-20 w-20 overflow-hidden transform hover:scale-125">
                                <img src={course.fields?.courseImage} key={course.id} alt="course-scorecard"/>
                            </div>
                            <div>
                                <h3 className="text-2xl hover:text-indigo-200 transform hover:scale-125">{course.fields?.courseName}</h3>
                            </div>
                        </Link>
                    </>
                ))}
            </div>
            <div className="bottom-0 mt-5 hover:text-indigo-200 transform hover:scale-125">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}
