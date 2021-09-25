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

    if (!details) return <h2>Loading</h2>

    const twoCalls = (e) => {
        setID(e.target.value);
        setToggle(0)
    }


    return (
        <div className="flex flex-col w-screen text-lg text-center items-center">
            {group === "players" ? 
                <label className="mt-5">Select Player</label>
                :
                <label className="mt-5">Select Course</label>
            }
            <select className="relative inline-block bg-gray-dk border-none hover:blue-500" onChange={twoCalls}>
                {group === "players" ?
                <option key="default" value="" className="absolute  bg-gray-dk hover:blue-200 text-gray-100 shadow-none">Players</option>
                :
                <option key="default" value="" className="absolute  bg-gray-dk hover:blue-200 text-gray-100 shadow-none">Courses</option>
                }
                {details.map((detail) => (
                    group === "players" ? 
                        <option key={detail.id} value={detail.id} className=" bg-gray-dk hover:bg-blue-100 text-gray-100 focus:outline-none rounded-md">{detail.fields?.playerName}</option>
                    :
                        <option key={detail.id} value={detail.courseName} className="bg-gray-dk text-gray-md hover:bg-gray-200 focus:outline-none focus:shadow-outline rounded-md">{detail.fields?.courseName}</option>
                ))}
            </select>
        </div>
    )
}
