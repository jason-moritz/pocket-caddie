import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchDetails } from "../services";
import ButtonDelete from "../buttons/ButtonDelete";
import ButtonBack from "../buttons/ButtonBack";
import ButtonEdit from "../buttons/ButtonEdit";
import ButtonZoom from "../buttons/ButtonZoom";


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
            setCourseDetails(await fetchDetails("courses", id));
        };
        getDetails();
    }, [id]);

    if (!courseDetails) return <h2>Loading</h2>

    return (
        <div>
            <ButtonBack location="/courses" />
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
                            <Link key={id} to={`/courses/${id}/image`}>
                                <ButtonZoom />
                            </Link>
                        </div>
                        <div className="ml-2 mr-2 mb-2">
                            <Link key={id} to={`/courses/${id}/edit`}>
                                <ButtonEdit />
                            </Link>
                        </div>
                        <div className="ml-2 mb-2">
                            <ButtonDelete id={id} group="courses" title={courseDetails?.courseName} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
