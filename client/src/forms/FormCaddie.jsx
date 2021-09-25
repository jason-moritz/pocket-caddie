export default function FormCaddie(props) {
    const { handleSubmit, playerID, yardage, setYardage, toggle, setToggle, toggle2, setToggle2 } = props;

    const handleToggle = (e) => {
        e.preventDefault();

        if (playerID === "" && yardage === "") {
        setToggle((prevToggle) => prevToggle + 1);
        setToggle2((prevToggle2) => prevToggle2 + 1);
        
        } else if (playerID === "") {
            setToggle((prevToggle) => prevToggle + 1);

        } else if (yardage === "") {
            setToggle2((prevToggle2) => prevToggle2 + 1);
        } 
    };

    const twoCalls = (e) => {
        setYardage(e.target.value);
        setToggle2(0);
    };

    return (
        <div>
            <div className="text-base text-center text-red-600">
                {toggle > 0 ? <div>Please select a player from the menu</div> : null}
            </div>
            <form 
            className="text-gray-100 w-screen mt-5"
            onSubmit={playerID !== "" && yardage !== "" ? handleSubmit : handleToggle}
        >
            <div className="flex justify-center">
                <div className="w-3/4 max-w-lg text-xl text-center flex flex-col items-center md:text-2xl">
                    <div className="mt-4">
                        
                        <label className="mt-4">Yardage Out  <span className="text-base">(*needs to be a number in yards)</span></label>
                        <input 
                        className="input" 
                        type="number"
                        value={yardage} 
                        onChange={twoCalls}
                        />
                        {toggle2 > 0 ? <div className="text-base text-center text-red-600 mb-2">Please enter a yardage</div> : null}
                        <button 
                            className="hover:text-gray-300 click:text-gray-300"
                        >
                            Get Club Suggestion
                        </button>
                    </div>
                </div>
            </div>
        </form>
        </div>
    )
}
