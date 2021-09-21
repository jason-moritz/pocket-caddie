import ButtonBack from "../buttons/ButtonBack";
import DropDownPlayer from "../dropdownmenu/DropDownPlayer";


export default function ClubSelector() {
    return (
        <div>
            <ButtonBack location="/" />
            <div className="text-gray-100">
                <DropDownPlayer />
            </div>
        </div>
    )
}
