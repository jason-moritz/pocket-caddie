export default function PlayerForm(props) {
    const { playerName, setPlayerName, playerImage, setPlayerImage, handicap, setHandicap, handleSubmit } = props;

    return (
        <form className="grid grid-cols-1 max-w-5xl" onSubmit={handleSubmit}>
            <label>Player Name</label>
            <input className="bg-transparent border-2 border-indigo-900" value={playerName} onChange={e => setPlayerName(e.target.value)} />
            <label>Photo</label>
            <input value={playerImage} onChange={e => setPlayerImage(e.target.value)} />
            <label>Handicap</label>
            <input value={handicap} onChange={e => setHandicap(parseInt(e.target.value))} />
            <button>Add Player</button>
        </form>
    )
}
