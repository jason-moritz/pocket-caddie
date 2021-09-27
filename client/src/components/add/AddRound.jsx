import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { addNew } from "../../services";
import { toast } from "react-toastify";
import FormRound from "../forms/FormRound";
import DropDownMenu from "../DropDownMenu";



export default function Scorecard() {
    const [playerID, setPlayerID] = useState("");
    const [courseName, setCourseName] = useState("");
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
    const [front9, setFront9] = useState("");
    const [back9, setBack9] = useState("");
    const [total, setTotal] = useState("");
    const [toggle, setToggle] = useState("");
    const [toggle2, setToggle2] = useState("");
    const [toggle3, setToggle3] = useState("");
    const history = useHistory();

    const fields = {
        playerID,
        courseName,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        h7,
        h8,
        h9,
        h10,
        h11,
        h12,
        h13,
        h14,
        h15,
        h16,
        h17,
        h18,
        front9,
        back9,
        total,
    };

    const roundTotal = () => {
        const front9String = [h1, h2, h3, h4, h5, h6, h7, h8, h9];
        const back9String = [h10, h11, h12, h13, h14, h15, h16, h17, h18];

        const front9Arr = front9String.map(number => (
        parseInt(number)
        ));

        const back9Arr = back9String.map(number => (
        parseInt(number)
        ));
    
        const sumArr = (arr) => {
            let total = 0;
            for (let i = 0; i < arr.length; i++) {
                total += arr[i]
            };
            return total;
        };

        const sumFront9 = sumArr(front9Arr);
        const sumBack9 = sumArr(back9Arr);
        const totalScore = sumFront9 + sumBack9;

        setFront9(`${sumFront9}`);
        setBack9(`${sumBack9}`);
        setTotal(`${totalScore}`);
    };

    useEffect(() => {
        roundTotal();
    });

    const handleToggle = (e) => {
        e.preventDefault();

        if (playerID === "" && courseName === "") {
        setToggle((prevToggle) => prevToggle + 1);
        setToggle2((prevToggle2) => prevToggle2 + 1);
        
        } else if (playerID === "") {
            setToggle((prevToggle) => prevToggle + 1);

        } else if (courseName === "") {
            setToggle2((prevToggle2) => prevToggle2 + 1);
        } else if (h1 === "" || h2 === "" || h3 === "" || h4 === "" || h5 === "" || h6 === "" || h7 === "" || h8 === "" || h9 === "" || h10 === "" || h11 === "" || h12 === "" || h13 === "" || h14 === "" || h15 === "" || h16 === "" || h17 === "" || h18 === "") {
            setToggle3((prevToggle3) => prevToggle3 + 1);
        };
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        await addNew("scores", fields);
        toast(`You have added a new round!`);
        history.push("/");
    };

    return (
        <div>
            <div className="pb-8 border-b-4 border-gray-100 rounded-md">
                <DropDownMenu 
                    setID={setPlayerID} 
                    group="players" 
                    setToggle={setToggle} 
                />
                {toggle > 0 ? <div className="error">Please select a player</div> : null}
                <DropDownMenu 
                    setID={setCourseName} 
                    group="courses" 
                    setToggle={setToggle2} 
                />
                {toggle2 > 0 ? <div className="error">Please select a course</div> : null}
            </div>
            <FormRound 
                toggle={toggle3} 
                handleToggle={handleToggle} 
                playerID={playerID} 
                courseName={courseName} 
                h1={h1} 
                setH1={setH1} 
                h2={h2} 
                setH2={setH2} 
                h3={h3} 
                setH3={setH3} 
                h4={h4} 
                setH4={setH4} 
                h5={h5} 
                setH5={setH5} 
                h6={h6} 
                setH6={setH6} 
                h7={h7} 
                setH7={setH7} 
                h8={h8} 
                setH8={setH8} 
                h9={h9} 
                setH9={setH9} 
                h10={h10} 
                setH10={setH10} 
                h11={h11} 
                setH11={setH11} 
                h12={h12} 
                setH12={setH12} 
                h13={h13} 
                setH13={setH13} 
                h14={h14} 
                setH14={setH14} 
                h15={h15} 
                setH15={setH15} 
                h16={h16} 
                setH16={setH16} 
                h17={h17} 
                setH17={setH17} 
                h18={h18} 
                setH18={setH18} 
                handleSubmit={handleSubmit} 
                front9={front9} 
                setFront9={setFront9} 
                back9={back9} 
                setBack9={setBack9} 
                total={total} 
                setTotal={setTotal} 
                title="Add Round"
            />
        </div>
    )
}
