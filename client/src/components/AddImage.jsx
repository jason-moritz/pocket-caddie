import { useState, useEffect } from "react";
import { uploadImage } from "../services";


export default function AddImage() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        const res = await uploadImage(e);
        console.log(res);
        setLoading((prevLoading) => !prevLoading);
    };

    return (
        <div className="text-gray-100 flex">
            <h1>Upload Image</h1>
            <input type="file" name="file" placeholder="Upload an Image" onChange={handleSubmit}></input>
        </div>
    )
}
