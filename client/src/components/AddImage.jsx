import { useState } from "react";
import { uploadImage } from "../services";


export default function AddImage(props) {
    const [loading, setLoading] = useState(false);
    const { setImage, title } = props;

    const handleSubmit = async(e) => {
        const res = await uploadImage(e);
        setImage(res.secure_url);
        setLoading((prevLoading) => !prevLoading);
    };

    return (
        <div className="text-gray-100 flex flex-col justify-center">
            <h1>Upload {title}</h1>
            <div className="flex justify-start">
                <input type="file" name="file" placeholder="Upload an Image" onChange={handleSubmit}></input>
            </div>
        </div>
    )
}
