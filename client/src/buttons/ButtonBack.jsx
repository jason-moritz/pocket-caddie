import { useHistory } from "react-router-dom";


export default function ButtonBack() {
    const history = useHistory();

    const handleClick = () => {
        history.goBack();
    };

    return (
        <div className="mt-5 ml-5">
                <button onClick={handleClick} className="hover:text-gray-300 h-8 w-8 transform hover:scale-125 text-green-lt hover:text-green-dk  focus:text-green-dk focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                </button>
        </div>
    )
}
