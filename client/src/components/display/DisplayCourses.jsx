import { useState, useEffect } from "react";
import { fetchList } from "../../services";
import { Link } from "react-router-dom";
import ButtonBack from "../buttons/ButtonBack";


export default function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const listCourses = async() => {
            setCourses(await fetchList("courses"));
        };
        listCourses();
    },[]);

    if (!courses) return <h1>Loading</h1>

    return (
        <div>
            <ButtonBack />
            <div className="object-center text-center w-full flex flex-col items-center text-gray-100 mt-5">
                <h1 className="title">Courses</h1>
                <div className="text-base sm:text-lg  text-green-lt">Select a course for details!</div>
                <div className="flex flex-col place-items-center w-3/4 sm:flex-row sm:flex-wrap sm:justify-around sm:items-center">
                    {courses.map((course) => (
                        <div className="mt-5 sm:w-1/5">
                            <Link 
                                class="pt-2" 
                                to={`/courses/${course.id}`}
                            >
                                <div className="flex flex-col place-items-center transform hover text-gray-300 transform transition-transform hover:scale-125 ">
                                    <h3 className="text-2xl sm:text-3xl">{course.fields?.courseName}</h3>
                                    <h3 className="text-lg sm:text-xl">{course.fields?.location}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
