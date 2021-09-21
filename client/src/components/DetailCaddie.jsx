import { useState } from "react";
import { fetchDetails } from "../services";
import DropDownMenu from "./DropDownMenu";
import FormCaddie from "../forms/FormCaddie";


export default function PlayerDropDown() {
    const [playerID, setPlayerID] = useState("rec16GtjMew2ERJKe");
    const [yardage, setYardage] = useState("");
    const [club, setClub] = useState("");

    const findClub = (object, value) => {
        return Object.keys(object).find(key => object[key] === value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        const res = await fetchDetails("players", playerID);
        const arr = Object.values(res);
        arr.push(yardage);
        const sortedArr = arr.sort((a, b) => a - b);
        const yardageIndex = sortedArr.indexOf(yardage);
        console.log(yardageIndex);
        let clubYardage = sortedArr[yardageIndex + 1];
        setClub(findClub(res, clubYardage));
    };

    return (
        <div className="w-screen  text-gray-100">
            <div className="flex flex-col place-items-center">
                <DropDownMenu setID={setPlayerID} group="players" />
                <label className="mt-4">Yardage Out</label>
                <FormCaddie handleSubmit={handleSubmit} yardage={yardage} setYardage={setYardage} />
                {club !== "" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>{`Don't be a hero. You need more club. Hit your ${club}. Believe me, you're not that guy, pal.`}</h1>
                    </div>
                    :
                    null    
                }
            </div>
        </div>
    )
}
