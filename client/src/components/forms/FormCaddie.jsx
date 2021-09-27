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
        };
    };

    const twoCalls = (e) => {
        setYardage(e.target.value);
        setToggle2(0);
    };

    return (
        <div>
            <div className="error">
                {toggle > 0 ?
                    <div>Please select a player from the menu</div> 
                : 
                    null
                }
            </div>
            <form 
                className="text-gray-100 w-screen mt-5"
                onSubmit={playerID !== "" && yardage !== "" ?
                    handleSubmit 
                : 
                    handleToggle
                }
            >
            <div className="flex justify-center">
                <div className="w-3/4 max-w-lg text-xl text-center flex flex-col items-center sm:text-3xl">
                    <div className="mt-4 flex flex-col items-center">
                        <label className="mt-4 sm:text-4xl">Yardage Out</label>
                        <h2 className="text-base sm:text-2xl">(*needs to be a number in yards)</h2>
                        <div className="w-1/3 mb-4">
                            <input 
                                className="input text-center sm:text-5xl sm:h-16" 
                                type="number"
                                min="1"
                                max="700"
                                value={yardage} 
                                onChange={twoCalls}
                            />
                        </div>
                        {toggle2 > 0 ? <div className="error">Please enter a yardage</div> : null}
                        <button className="btn">
                            Get Club
                        </button>
                    </div>
                </div>
            </div>
        </form>
        </div>
    )
}
