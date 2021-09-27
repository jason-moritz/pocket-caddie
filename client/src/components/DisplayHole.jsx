export default function DisplayHole(props) {
    const { title, score } = props;

    return (
        <div className="h-20 w-20 sm:h-32 sm:w-32 border-2 border-gray-100 text-center">
            <div className="h-1/3 border-b-2 rounded-md text-xl sm:text-3xl">{title}</div>
            <div className="h-3/4 flex items-center justify-center  text-4xl sm:text-6xl">
                <div>{score}</div>
            </div>
        </div>
    )
}
