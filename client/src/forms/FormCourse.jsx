import { useState } from "react";
import AddImage from "../components/AddImage";


export default function CourseForm(props) {
    const { courseName, setCourseName, setCourseImage, rating, setRating, slope, setSlope, location, setLocation, handleSubmit, title } = props;
    const [toggle1, setToggle1] = useState(0);
    const [toggle2, setToggle2] = useState(0);
    const [toggle3, setToggle3] = useState(0);

    const handleToggle = (e) => {
        e.preventDefault();

        if (courseName === "" && rating === "" && slope === "") {
            setToggle1((prevToggle) => prevToggle + 1);
            setToggle2((prevToggle) => prevToggle + 1);
            setToggle3((prevToggle) => prevToggle + 1);

        } else if (courseName === "" && rating === "") {
            setToggle1((prevToggle) => prevToggle + 1);
            setToggle2((prevToggle) => prevToggle + 1);

        } else if (courseName === "" && slope === "") {
            setToggle1((prevToggle) => prevToggle + 1);
            setToggle3((prevToggle) => prevToggle + 1);

        } else if (courseName === "") {
            setToggle1((prevToggle) => prevToggle + 1);

        }else if (rating === "") {
            setToggle2((prevToggle) => prevToggle + 1);

        } else if (slope === "") {
            setToggle3((prevToggle) => prevToggle + 1);
        };
    };

    const twoCallsCourse = (e) => {
        setCourseName(e.target.value);
        setToggle1(0);
    };

    const twoCallsRating = (e) => {
        setRating(e.target.value);
        setToggle2(0);
    };
    
    const twoCallsSlope = (e) => {
        setSlope(e.target.value);
        setToggle3(0);
    };


    return (
        <form className="text-gray-100 w-screen mt-5" onSubmit={courseName && rating && slope ? handleSubmit : handleToggle}>
            <div className="flex justify-center">
                <div className="w-3/4 max-w-lg text-xl">
                    <label>Course Name</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={courseName} onChange={twoCallsCourse} />
                    {toggle1 > 0 ? <p className="text-sm text-red-500">Please enter a course name</p> : null}
                    
                    <label>Location (city, State)</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={location} onChange={e => setLocation(e.target.value)} />
                    
                    <label>Rating</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={rating} onChange={twoCallsRating} />
                    {toggle2 > 0 ? <p className="text-sm text-red-500">Please enter a rating</p> : null}

                    <label>Slope</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={slope} onChange={twoCallsSlope} />
                    {toggle3 > 0 ? <p className="text-sm text-red-500">Please enter a slope</p> : null}
                    
                    <AddImage setImage={setCourseImage} title="Scorecard" />
                    
                    <div className="flex justify-center">
                        <button className="  hover:text-gray-300 click:text-gray-300">{title}</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
