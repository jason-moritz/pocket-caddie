import { uploadImage } from "../../services";


export default function AddImage(props) {
    const { image, setImage, title } = props;

    const handleSubmit = async(e) => {
        const res = await uploadImage(e);
        setImage(res.secure_url);
    };

    return (
        <div className="text-gray-200 text-center flex flex-col items-center sm:text-2xl">
            <h1>Click on the button to upload a photo!</h1>
            <label className="cursor-pointer hover:bg-gray-700 mt-4 border-2 rounded-md text-center flex flex-col items-center border-gray-200 px-2">
                <h1 className="text-lg sm:text-2xl">Upload {title}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 py-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <input className="w-full text-base p-2 hidden" type="file" name="file" onChange={handleSubmit} />
            </label>
            {image ?
                <div className="text-center text-base pt-2">
                    <h2 className="sm:text-xl text-green-lt">Image uploaded successfully!</h2>
                </div>
            :
                null}
        </div>
    )
}
