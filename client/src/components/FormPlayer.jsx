export default function PlayerForm(props) {
    const { playerName, setPlayerName, playerImage, setPlayerImage, handicap, setHandicap, handleSubmit, title } = props;

    return (
        <form className="max-w-5xl text-gray-100 text-center" onSubmit={handleSubmit}>
            <div className="flex justify-center">
                <div className="flex flex-col 1 w-3/4 content-center">
                    <label>Player Name</label>
                    <input className="rounded-md" value={playerName} onChange={e => setPlayerName(e.target.value)} />
                    <label>Photo</label>
                    <input className="rounded-md" value={playerImage} onChange={e => setPlayerImage(e.target.value)} />
                    <label>Handicap</label>
                    <input className="rounded-md" value={handicap} onChange={e => setHandicap(e.target.value)} />
                    <button className="hover:text-gray-300 click:text-gray-300">{title}</button>
                </div>
            </div>
        </form>
    )
}
