import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCourseDetails } from "../services";
import DeleteButton from "./DeleteButton";
import BackButton from "./BackButton";


export default function CourseDetail() {
    const [courseDetails, setCourseDetails] = useState({});
    const [toggle, setToggle] = useState(false);
    const { id } = useParams();

    const handleToggle = (e) => {
        e.preventDefault();

        setToggle((prevToggle) => !prevToggle);
    };

    useEffect(() => {
        const getDetails = async() => {
            setCourseDetails(await fetchCourseDetails(id));
        };
        getDetails();
    }, [id]);

    if (!courseDetails) return <h2>Loading</h2>

    return (
        <div>
            <BackButton />
            <div className="flex flex-col text-gray-100 p-4">
                <div className="text-center">
                    <h2 className="text-xl">{courseDetails?.courseName}</h2>
                </div>
                <div className="flex flex-col-wrap">
                    <div className="p-4 h-2/4 w-2/4 max-h-1/4 max-w-xs overflow-hidden">
                        <button onClick={handleToggle}>
                            {toggle === false ? 
                            <div>
                                <img 
                                className="h-full w-full rounded-md object-cover object-center"
                                src={courseDetails?.courseImage} alt="score-card" 
                                />
                            </div>
                            :
                            <div className="h-screen w-screen">
                                <img 
                                className="h-full w-full rounded-md   object-center"
                                src={courseDetails?.courseImage} alt="score-card" 
                                />
                            </div>
                            }
                        </button>
                    </div>
                    <div className="flex flex-col mt-8 pl-4 text-xl text-gray-100">
                        <h4>Rating: {courseDetails?.rating}</h4>
                        <h4>Slope: {courseDetails?.slope}</h4>
                    </div>
                </div>
                <div className="flex w-full border-b-4 border-gray-100 rounded-md">
                    <div className="flex w-2/4 max-w-xs justify-center">
                        <div className="mr-2 mb-2">
                            <Link key={id} to={`/courses/${id}/edit`}>
                                <button className="h-8 w-8 transform hover:scale-125 text-green-lt hover:text-green-dk  focus:text-green-dk focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                        <div className="ml-2 mb-2">
                            <DeleteButton id={id} group="courses" title={courseDetails?.courseName} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
