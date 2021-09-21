import ButtonBack from "../buttons/ButtonBack";
import CaddieDisplay from "./CaddieDisplay";


export default function ClubSelector() {
    return (
        <div>
            <ButtonBack location="/" />
            <div className="text-gray-100">
                <CaddieDisplay />
            </div>
        </div>
    )
}
