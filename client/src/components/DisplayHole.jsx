export default function DisplayHole(props) {
    const { title, score } = props;

    return (
        <div className="h-14  w-14 border-2 border-gray-100 text-md text-center">
            <div className="border-b-2 rounded-md">{title}</div>
            <div className="text-green-lt">{score}</div>
        </div>
    )
}
