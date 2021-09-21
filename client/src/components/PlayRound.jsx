import { useState, useEffect } from "react";
import DropDownPlayer from "../dropdownmenu/DropDownPlayer";
import Scorecard from "./Scorecard";

export default function PlayRound() {
    const [playerID, setPlayerID] = useState("");
    const [courseID, setCourseID] = useState("");

    return (
        <div className="text-gray-100">
            <DropDownPlayer setPlayerID={setPlayerID} />
        </div>
    )
}
