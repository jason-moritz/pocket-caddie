import { useState } from "react";


export default function CourseForm(props) {
    const { courseName, setCourseName, courseImage, setCourseImage, rating, setRating, slope, setSlope, handleSubmit, title } = props;
    const [toggle, setToggle] = useState(0);

    const handleToggle = (e) => {
        e.preventDefault();
        if (courseName === "") {
            setToggle((prevToggle) => prevToggle + 1);
        } else if (courseName) {
            setToggle(0)
        }
    };

    const twoCallsCourse = (e) => {
        setCourseName(e.target.value);
        setToggle(0);
    };

    return (
        <form className="text-gray-100 w-screen" onSubmit={handleSubmit}>
            <div className="flex justify-center">
                <div className="w-3/4 max-w-2xl">
                    <label>Course Name</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-500 bg-gray-100 w-full leading-6 hover:scale-50 focus:outline-none focus:shadow-outline" value={courseName} onChange={e => setCourseName(e.target.value)} />
                    {courseName === "" ? <p className="text-sm text-red-500">Please enter a course name</p> : null}
                    <label>Photo</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-500 bg-gray-100 w-full leading-6 hover:scale-50 focus:outline-none focus:shadow-outline" value={courseImage} onChange={e => setCourseImage(e.target.value)} />
                    <label>Rating</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-500 bg-gray-100 w-full leading-6 hover:scale-50 focus:outline-none focus:shadow-outline" value={rating} onChange={e => setRating(e.target.value)} />
                    <label>Slope</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-500 bg-gray-100 w-full leading-6 hover:scale-50 focus:outline-none focus:shadow-outline" value={slope} onChange={e => setSlope(e.target.value)} />
                    <div className="flex justify-center">
                        <button className="  hover:text-gray-300 click:text-gray-300">{title}</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
