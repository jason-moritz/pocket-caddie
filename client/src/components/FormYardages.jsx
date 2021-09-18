export default function FormYardages(props) {
    const { lw, setLw, sw, setSw, aw, setAw, pw, setPw, nineir, setNineir, eightir, setEightir, sevenir, setSevenir, sixir, setSixir, fiveir, setFiveir, fourir, setFourir, threeir, setThreeir, twoir, setTwoir, fivewd, setFivewd, threewd, setThreewd, hybrid, setHybrid, driver, setDriver, handleSubmit, title } = props;
    
    return (
        <form className="grid grid-cols-1 max-w-5xl text-gray-900" onSubmit={handleSubmit}>
            <label>LW</label>
            <input value={lw} onChange={e => setLw(e.target.value)} />
            <label>SW</label>
            <input value={sw} onChange={e => setSw(e.target.value)} />
            <label>AW</label>
            <input value={aw} onChange={e => setAw(e.target.value)} />
            <label>PW</label>
            <input value={pw} onChange={e => setPw(e.target.value)} />
            <label>9ir</label>
            <input value={nineir} onChange={e => setNineir(e.target.value)} />
            <label>8ir</label>
            <input value={eightir} onChange={e => setEightir(e.target.value)} />
            <label>7ir</label>
            <input value={sevenir} onChange={e => setSevenir(e.target.value)} />
            <label>6ir</label>
            <input value={sixir} onChange={e => setSixir(e.target.value)} />
            <label>5ir</label>
            <input value={fiveir} onChange={e => setFiveir(e.target.value)} />
            <label>4ir</label>
            <input value={fourir} onChange={e => setFourir(e.target.value)} />
            <label>3ir</label>
            <input value={threeir} onChange={e => setThreeir(e.target.value)} />
            <label>2ir</label>
            <input value={twoir} onChange={e => setTwoir(e.target.value)} />
            <label>5wd</label>
            <input value={fivewd} onChange={e => setFivewd(e.target.value)} />
            <label>3wd</label>
            <input value={threewd} onChange={e => setThreewd(e.target.value)} />
            <label>Hybrid</label>
            <input value={hybrid} onChange={e => setHybrid(e.target.value)} />
            <label>Driver</label>
            <input value={driver} onChange={e => setDriver(e.target.value)} />
            <button>{title}</button>
        </form>
    )
}
