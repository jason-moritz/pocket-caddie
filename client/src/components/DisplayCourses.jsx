import { useState, useEffect } from "react";
import { getCourses } from "../services";
import { Link } from "react-router-dom";
import ButtonBack from "../buttons/ButtonBack";


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
        <div>
            <ButtonBack location="/" />
            <div className="object-center text-center text-gray-100 mt-5">
                <h1 className="text-4xl">Courses</h1>
                <div className="flex flex-col flex-wrap">
                    {courses.map((course) => (
                        <div className="mt-5">
                            <Link class="flex flex-col items-center pt-2" to={`/courses/${course.id}`}>
                                <div className="block transform hover text-gray-300 transform transition-transform hover:scale-125">
                                    <h3 className="text-2xl">{course.fields?.courseName}</h3>
                                    <h3 className="text-sm">{course.fields?.location}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
