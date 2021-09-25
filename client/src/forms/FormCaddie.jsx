export default function FormCaddie(props) {
    const { handleSubmit, yardage, setYardage } = props;
    
    return (
        <form className="w-3/4 max-w-lg text-xl text-center" onSubmit={handleSubmit}>
            <input className="input" value={yardage} onChange={e => setYardage(e.target.value)}></input>
            <button className="hover:text-gray-300 click:text-gray-300">Submit</button>
        </form>
    )
}
