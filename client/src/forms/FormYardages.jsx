export default function FormYardages(props) {
    const { lw, setLw, sw, setSw, aw, setAw, pw, setPw, nineir, setNineir, eightir, setEightir, sevenir, setSevenir, sixir, setSixir, fiveir, setFiveir, fourir, setFourir, threeir, setThreeir, twoir, setTwoir, fivewd, setFivewd, threewd, setThreewd, hybrid, setHybrid, driver, setDriver, handleSubmit, title } = props;
    
    return (
        <form className="text-gray-100 w-screen mt-5" onSubmit={handleSubmit}>
            <div className="flex justify-center">
                <div className="w-3/4 max-w-2xl">                    
                    <label>LW</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={lw} onChange={e => setLw(e.target.value)} />
                    <label>SW</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={sw} onChange={e => setSw(e.target.value)} />
                    <label>AW</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={aw} onChange={e => setAw(e.target.value)} />
                    <label>PW</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={pw} onChange={e => setPw(e.target.value)} />
                    <label>9ir</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={nineir} onChange={e => setNineir(e.target.value)} />
                    <label>8ir</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={eightir} onChange={e => setEightir(e.target.value)} />
                    <label>7ir</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={sevenir} onChange={e => setSevenir(e.target.value)} />
                    <label>6ir</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={sixir} onChange={e => setSixir(e.target.value)} />
                    <label>5ir</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={fiveir} onChange={e => setFiveir(e.target.value)} />
                    <label>4ir</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={fourir} onChange={e => setFourir(e.target.value)} />
                    <label>3ir</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={threeir} onChange={e => setThreeir(e.target.value)} />
                    <label>2ir</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={twoir} onChange={e => setTwoir(e.target.value)} />
                    <label>Hybrid</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={hybrid} onChange={e => setHybrid(e.target.value)} />
                    <label>5wd</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={fivewd} onChange={e => setFivewd(e.target.value)} />
                    <label>3wd</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={threewd} onChange={e => setThreewd(e.target.value)} />
                    <label>Driver</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={driver} onChange={e => setDriver(e.target.value)} />
                    <div className="flex justify-center">
                        <button className=" hover:text-gray-300 click:text-gray-300">{title}</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
