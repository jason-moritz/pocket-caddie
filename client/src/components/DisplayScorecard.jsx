import { useState, useEffect } from "react";

import DetailScorecard from "./DetailScorecard";

export default function PlayRound() {
    const [courseID, setCourseID] = useState("");

    return (
        <div className="text-gray-100">
            <DetailScorecard />
        </div>
    )
}
