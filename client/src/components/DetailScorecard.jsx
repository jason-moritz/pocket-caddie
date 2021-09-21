import { useState, useEffect } from "react"
import FormScorecard from "../forms/FormScorecard";

export default function Scorecard() {
    const [h1, setH1] = useState("");
    const [h2, setH2] = useState("");
    const [h3, setH3] = useState("");
    const [h4, setH4] = useState("");
    const [h5, setH5] = useState("");
    const [h6, setH6] = useState("");
    const [h7, setH7] = useState("");
    const [h8, setH8] = useState("");
    const [h9, setH9] = useState("");
    const [h10, setH10] = useState("");
    const [h11, setH11] = useState("");
    const [h12, setH12] = useState("");
    const [h13, setH13] = useState("");
    const [h14, setH14] = useState("");
    const [h15, setH15] = useState("");
    const [h16, setH16] = useState("");
    const [h17, setH17] = useState("");
    const [h18, setH18] = useState("");


    return (
        <div>
            <FormScorecard h1={h1} setH1={setH1} h2={h2} setH2={setH2} h3={h3} setH3={setH3} h4={h4} setH4={setH4} h5={h5} setH5={setH5} h6={h6} setH6={setH6} h7={h7} setH7={setH7} h8={h8} setH8={setH8} h9={h9} setH9={setH9} h10={h10} setH10={setH10} h11={h11} setH11={setH11} h12={h12} setH12={setH12} h13={h13} setH13={setH13} h14={h14} setH14={setH14} h15={h15} setH15={setH15} h16={h16} setH16={setH16} h17={h17} setH17={setH17} h18={h18} setH18={setH18} />
        </div>
    )
}
