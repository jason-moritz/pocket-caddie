import { useHistory } from "react-router-dom";
import { deleteItem } from "../services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DeleteButton(props) {
    const { group, title, id } = props;
    const history = useHistory();

    console.log(group)
    const handleDelete = async() => {
        await deleteItem(group, id);
        toast(`${title} has been deleted!`);
        history.push(`/${group}`);
        }

    return (
            <button onClick={handleDelete}>Delete</button>
    )
}
