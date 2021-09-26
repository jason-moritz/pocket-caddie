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
                <div className="w-3/4 max-w-lg text-xl flex flex-col items-center sm:text-2xl">
                    <AddImage setImage={setCourseImage} title="Scorecard" />
                    <div className="mt-16">
                        <label>Course Name</label>
                        <input 
                            className="input" 
                            value={courseName} 
                            onChange={twoCallsCourse} 
                        />
                        {toggle1 > 0 ? <p className="text-base sm:text-lg  text-red-500 mb-2">Please enter a course name</p> : null}

                        <label>Location (city, State)</label>
                        <input 
                            className="input" 
                            value={location} 
                            onChange={e => setLocation(e.target.value)} 
                        />

                        <label>Rating <span className="text-base sm:text-lg">(*needs to be a number)</span></label>
                        <input 
                            className="input" 
                            type="number"
                            min="0"
                            max="100"
                            value={rating} 
                            onChange={twoCallsRating} 
                        />
                        {toggle2 > 0 ? <p className="text-base sm:text-lg  text-red-500 mb-2">Please enter a rating</p> : null}

                        <label>Slope <span className="text-base sm:text-lg">(*needs to be a number)</span></label>
                        <input 
                            className="input" 
                            type="number"
                            min="0"
                            max="200"
                            value={slope} 
                            onChange={twoCallsSlope} 
                        />
                        {toggle3 > 0 ? <p className="text-base sm:text-lg text-red-500 mb-6">Please enter a slope</p> : null}

                        <div className="flex justify-center">
                            <button className="btn mb-4">{title}</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
