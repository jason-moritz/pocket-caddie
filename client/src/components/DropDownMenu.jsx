import { useState, useEffect } from "react";
import { fetchList } from "../services";

export default function DropDownMenuCaddie(props) {
    const [details, setDetails] = useState("");
    const { group, setID, setToggle } = props;

    useEffect(() => {
        const getDetails = async() => {
            setDetails(await fetchList(group));
        };
        getDetails();

    },[group]);

    const twoCalls = (e) => {
        setID(e.target.value);
        setToggle(0);
    };

    if (!details) return <h2>Loading</h2>

    


    return (
        <div className="flex flex-col w-screen text-center items-center">
            {group === "players" ? 
                <label className="text-xl sm:text-3xl mt-5">Select Player</label>
            :
                <label className="text-xl sm:text-3xl mt-5">Select Course</label>
            }
            <select className="relative inline-block text-lg sm:text-2xl bg-gray-dk border-none" onChange={twoCalls}>
                {group === "players" ?
                    <option key="default" value="" className="absolute  bg-gray-dk  text-gray-100 shadow-none">Players</option>
                :
                    <option key="default" value="" className="absolute  bg-gray-dk  text-gray-100 shadow-none">Courses</option>
                }
                {details.map((detail) => (
                    group === "players" ? 
                        <option key={detail.id} value={detail.id} className=" bg-gray-dk  text-gray-100 outline-none focus:outline-none">{detail.fields?.playerName}</option>
                    :
                        <option key={detail.id} value={detail.courseName} className="bg-gray-dk text-gray-100 outline-none focus:outline-none ">{detail.fields?.courseName}</option>
                ))}
            </select>
        </div>
    )
}
