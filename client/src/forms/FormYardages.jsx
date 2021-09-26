export default function FormYardages(props) {
    const { toggle, setToggle, lw, setLw, sw, setSw, aw, setAw, pw, setPw, nineir, setNineir, eightir, setEightir, sevenir, setSevenir, sixir, setSixir, fiveir, setFiveir, fourir, setFourir, threeir, setThreeir, twoir, setTwoir, fivewd, setFivewd, threewd, setThreewd, hybrid, setHybrid, driver, setDriver, handleSubmit, title } = props;
    
    const handleToggle = (e) => {
        e.preventDefault();

        setToggle((prevToggle) => prevToggle + 1);
    };

    return (
        <form 
        className="text-gray-100 w-screen mt-5 flex justify-center" 
        onSubmit={lw && sw && aw && pw && nineir && eightir && sevenir && sixir && fiveir && fourir && threeir && twoir && hybrid && fivewd && threewd && driver ? handleSubmit : handleToggle}>

            <div className="flex text-xl w-full max-w-lg justify-center text-center">
                <div className="md:flex md:flex-col md:w-full md:items-center">     
                    {toggle > 0 ? <div className="mx-4 text-center text-lg mb-6 text-red-600">Please enter an average yardage for each club. If you do not have that club, please enter 0.</div> : null}               
                    <div className="md:flex md:flex-row">
                        <div>
                            <label>Lob Wedge</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={lw} onChange={e => setLw(e.target.value)} />
                        </div>
                        <div>
                            <label>Sand Wedge</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={sw} onChange={e => setSw(e.target.value)} />
                        </div>
                        <div>
                            <label>Gap Wedge</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={aw} onChange={e => setAw(e.target.value)} />
                        </div>
                        <div>
                            <label>Pitching Wedge</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={pw} onChange={e => setPw(e.target.value)} />
                        </div>
                        <div>
                            <label>9 Iron</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={nineir} onChange={e => setNineir(e.target.value)} />
                        </div>
                        <div>
                            <label>8 Iron</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={eightir} onChange={e => setEightir(e.target.value)}     />
                        </div>
                        <div>
                            <label>7 Iron</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={sevenir} onChange={e => setSevenir(e.target.value)}     />
                        </div>
                        <div>
                            <label>6 Iron</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={sixir} onChange={e => setSixir(e.target.value)} />
                        </div>
                    </div>
                    <div className="md:flex md:flex-row">
                        <div>
                            <label>5 Iron</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={fiveir} onChange={e => setFiveir(e.target.value)} />
                        </div>
                        <div>
                            <label>4 Iron</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={fourir} onChange={e => setFourir(e.target.value)} />
                        </div>
                        <div>
                            <label>3 Iron</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={threeir} onChange={e => setThreeir(e.target.value)} />
                        </div>
                        <div>
                            <label>2 Iron</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={twoir} onChange={e => setTwoir(e.target.value)} />
                        </div>
                        <div>
                            <label>Hybrid</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={hybrid} onChange={e => setHybrid(e.target.value)} />
                        </div>
                        <div>
                            <label>5 Wood</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={fivewd} onChange={e => setFivewd(e.target.value)} />
                        </div>
                        <div>
                            <label>3 Wood</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={threewd} onChange={e => setThreewd(e.target.value)} />
                        </div>
                        <div>
                            <label>Driver</label>
                            <input className="input text-center md:w-36" type="number" min="0" max="500" value={driver} onChange={e => setDriver(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className=" hover:text-gray-300 click:text-gray-300">{title}</button>
                    </div>
                </div>
            </div>  
        </form> 
    )   
}   
