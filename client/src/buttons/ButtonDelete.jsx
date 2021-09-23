import { useHistory } from "react-router-dom";
import { deleteItem } from "../services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ButtonDelete(props) {
    const { group, title, id } = props;
    const history = useHistory();

    const handleDelete = async() => {
        await deleteItem(group, id);
        toast(`${title} has been deleted!`);
        history.back();
        };

    return (
            <button class="h-8 w-8 fill-current transform hover:scale-125  text-green-lt hover:text-green-dk  focus:text-green-dk focus:outline-none" onClick={handleDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
    )
}
