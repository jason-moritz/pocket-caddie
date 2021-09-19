export default function PlayerForm(props) {
    const { playerName, setPlayerName, playerImage, setPlayerImage, handicap, setHandicap, handleSubmit, title } = props;

    return (
        <form className="grid grid-cols-1 max-w-5xl text-gray-100 text-center" onSubmit={handleSubmit}>
            <div className="flex justify-center">
                <div className="flex flex-col">
                    <label>Player Name</label>
                    <input className="rounded-md mb-4  text-gray-500" value={playerName} onChange={e => setPlayerName(e.target.value)} />
                    <label>Photo</label>
                    <input className="rounded-md mb-4 text-gray-500" value={playerImage} onChange={e => setPlayerImage(e.target.value)} />
                    <label>Handicap</label>
                    <input className="rounded-md mb-4 text-gray-500" value={handicap} onChange={e => setHandicap(e.target.value)} />
                    <button className="hover:text-gray-300 click:text-gray-300">{title}</button>
                </div>
            </div>
        </form>
    )
}
