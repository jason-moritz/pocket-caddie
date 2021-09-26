import { useState } from "react";
import AddImage from "../components/AddImage";


export default function PlayerForm(props) {
    const { playerName, setPlayerName, image, setPlayerImage, handicap, setHandicap, handleSubmit, title } = props;
    const [toggle, setToggle] = useState(0);

    const handleToggle = (e) => {
        e.preventDefault();

        if (playerName === "") {
            setToggle((prevToggle) => prevToggle + 1);

        } else if (playerName) {
            setToggle(0)
        };
    };

    const twoCalls = (e) => {
        setPlayerName(e.target.value);
        setToggle(0);
    };
    
    return (
        <form className=" text-gray-100 w-screen mt-5" onSubmit={playerName !== "" ? handleSubmit : handleToggle}>
            <div className="flex justify-center">
                <div className="w-3/4 max-w-lg text-xl flex flex-col items-center sm:text-2xl">
                    <AddImage setImage={setPlayerImage} image={image} title="Selfie" />
                    <div className="mt-16">
                        <label>Player Name</label>
                        <input className="input" value={playerName} onChange={twoCalls} />
                        {toggle > 0 ? <p className="text-sm text-red-500">Please enter a player name</p> : null} 

                        <label>Handicap (0-54)</label>
                        <a className="block text-sm  text-green-lt sm:text-lg" rel="noreferrer" target="_blank" href="https://www.usga.org/course-handicap-calculator.html">Click here to learn more about golf handicaps</a>
                        <input className="input" type="number" min="0" max="100" value={handicap} onChange={e => setHandicap(e.target.value)} />


                        <div className="flex justify-center mb-4 mt-4">
                            <button className="btn">{title}</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
