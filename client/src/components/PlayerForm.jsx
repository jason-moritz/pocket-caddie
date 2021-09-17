export default function PlayerForm(props) {
    const { playerName, setPlayerName, playerImage, setPlayerImage, handicap, setHandicap, handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label>Player Name</label>
            <input value={playerName} onChange={e => setPlayerName(e.target.value)} />
            <label>Photo</label>
            <input value={playerImage} onChange={e => setPlayerImage(e.target.value)} />
            <label>Handicap</label>
            <input value={handicap} onChange={e => setHandicap(e.target.value)} />
            <button>Add Player</button>
        </form>
    )
}
