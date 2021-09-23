export default function FormCaddie(props) {
    const { handleSubmit, yardage, setYardage } = props;
    
    return (
        <form className="w-2/3 max-w-lg text-xl text-center" onSubmit={handleSubmit}>
            <input className="h-full block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={yardage} onChange={e => setYardage(e.target.value)}></input>
            <button>Submit</button>
        </form>
    )
}
