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
        const sortedArr = arr.sort((a, b) => a - b).filter(arrItem => isNaN(arrItem) === false);
        const yardageIndex = sortedArr.indexOf(yardage);
        console.log(sortedArr)
        console.log(yardageIndex)
        let clubYardage = 0
        yardageIndex === 17 ? clubYardage = sortedArr[yardageIndex - 1] : clubYardage = sortedArr[yardageIndex + 1];
        setClub(findClub(res, clubYardage));
        setYardage("");
    };

    return (
        <div className="w-screen  text-gray-100">
            <div className="flex flex-col place-items-center text-xl">
                <DropDownMenu setID={setPlayerID} group="players" />
                <label className="mt-4">Yardage Out</label>
                <FormCaddie handleSubmit={handleSubmit} yardage={yardage} setYardage={setYardage} />
                {club === "lw" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>Hit your lob wedge and pray you don't chunk it.</h1>
                    </div>
                    :
                    null    
                }
                {club === "sw" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>You will likely blade this but hit your sand wedge.</h1>
                    </div>
                    :
                    null    
                }
                {club === "aw" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>Hit your gap wedge and try not to pull it too far right or left.</h1>
                    </div>
                    :
                    null    
                }
                {club === "pw" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>Let's try hitting your pitching wedge.</h1>
                    </div>
                    :
                    null    
                }
                {club === "nineir" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>Trust me. You won't get there with how you hit wedges. Hit your 9 iron.</h1>
                    </div>
                    :
                    null    
                }
                {club === "eightir" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>You will likely try to swing too hard, but hit your 8 iron.</h1>
                    </div>
                    :
                    null    
                }
                {club === "sevenir" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>As long as you don't slice this, your 7 iron is the club to use.</h1>
                    </div>
                    :
                    null    
                }
                {club === "sixir" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>Hit your 6 iron. This will likely be chunked, but you need the practice.</h1>
                    </div>
                    :
                    null    
                }
                {club === "fiveir" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>Hit your 5 iron and swing extra hard because you will chunk this for sure.</h1>
                    </div>
                    :
                    null    
                }
                {club === "fourir" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>Hit your 4 iron and see what happens.</h1>
                    </div>
                    :
                    null    
                }
                {club === "threeir" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>Hit your 3 iron or hybrid.</h1>
                    </div>
                    :
                    null    
                }
                {club === "twoir" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>Hit your 2 iron or hybrid.</h1>
                    </div>
                    :
                    null    
                }
                {club === "hybrid" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>Hit your hybrid since this is likely the only club you can get the ball up in the air with.</h1>
                    </div>
                    :
                    null    
                }
                {club === "fivewd" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>Hit your 5 wood if you got one.</h1>
                    </div>
                    :
                    null    
                }
                {club === "threewd" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>Hit your 3 wood if you got one.</h1>
                    </div>
                    :
                    null    
                }
                {club === "driver" ?
                    <div className="text-2xl text-center mt-5">
                            <h1>You really should be hitting your hybrid, but let's try and smash driver. Don't forget to swing extra hard.</h1>
                        </div>
                        :
                        null    
                }
            </div>
        </div>
    )
}
