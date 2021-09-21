import ButtonBack from "../buttons/ButtonBack";
import DetailCaddie from "./DetailCaddie";


export default function ClubSelector() {
    return (
        <div>
            <ButtonBack location="/" />
            <div className="text-gray-100">
                <DetailCaddie />
            </div>
        </div>
    )
}
