import { useState, useEffect } from "react";
import DropDownMenu from "./DropDownMenu";
import DetailScorecard from "./DetailScorecard";

export default function PlayRound() {
    const [playerID, setPlayerID] = useState("");
    const [courseID, setCourseID] = useState("");

    return (
        <div className="text-gray-100">
            <DropDownMenu setID={setPlayerID} group="players" />
            <DropDownMenu setID={setCourseID} group="courses" />
        </div>
    )
}
