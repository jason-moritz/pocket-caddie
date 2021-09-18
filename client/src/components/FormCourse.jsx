export default function CourseForm(props) {
    const { courseName, setCourseName, courseImage, setCourseImage, rating, setRating, slope, setSlope, handleSubmit, title } = props;

    return (
        <form className="grid grid-cols-1 max-w-5xl text-gray-900" onSubmit={handleSubmit}>
            <h2>Add a new course!</h2>
            <label>Course Name</label>
            <input value={courseName} onChange={e => setCourseName(e.target.value)} />
            <label>Photo</label>
            <input value={courseImage} onChange={e => setCourseImage(e.target.value)} />
            <label>Rating</label>
            <input value={rating} onChange={e => setRating(e.target.value)} />
            <label>Slope</label>
            <input value={slope} onChange={e => setSlope(e.target.value)} />
            <button>{title}</button>
        </form>
    )
}
