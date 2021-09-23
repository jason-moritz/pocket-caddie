import { useState, useEffect } from "react";
import { fetchList } from "../services";

export default function DropDownMenuCaddie(props) {
    const [details, setDetails] = useState("");
    const { group, setID } = props;

    useEffect(() => {
        const getDetails = async() => {
            setDetails(await fetchList(group));
        };
        getDetails();

    },[group]);

    if (!details) return <h2>Loading</h2>

    return (
        <div className="flex flex-col w-screen items-center">
            {group === "players" ? 
                <label className="mt-5">Select Player</label>
                :
                <label className="mt-5">Select Course</label>
            }
                <select className="bg-gray-100 rounded-md text-gray-md w-2/3 max-w-lg text-center text-xl" onChange={e => setID(e.target.value)}>
                    {details.map((detail) => (
                        group === "players" ? 
                            <option key={detail.id} value={detail.id} className="bg-gray-100 text-gray-md leading-6 hover:bg-gray-200 focus:outline-none focus:shadow-outline rounded-md">{detail.fields?.playerName}</option>
                        :
                            <option key={detail.id} value={detail.courseName} className="bg-gray-100 text-gray-md leading-6 hover:bg-gray-200 focus:outline-none focus:shadow-outline rounded-md">{detail.fields?.courseName}</option>
                    ))}
                </select>
        </div>
    )
}
