export default function FormScorecard(props) {
    const { handleToggle, playerID, courseName, h1, setH1, h2, setH2, h3, setH3, h4, setH4, h5, setH5, h6, setH6, h7, setH7, h8, setH8, h9, setH9, h10, setH10, h11, setH11, h12, setH12, h13, setH13, h14, setH14, h15, setH15, h16, setH16, h17, setH17, h18, setH18, title, handleSubmit } = props;

    return (
        <form className="text-gray-100 w-screen mt-5" onSubmit={playerID !== "" && courseName !== "" ? handleSubmit : handleToggle}>
            <div className="flex justify-center flex-col items-center">
                <div className="w-3/4 max-w-lg text-center flex flex-col items-center">
                <div className="text-lg mb-4 text-center">Please enter a score from 1 - 10 (give up after 10 strokes)</div>        
                    <div className="md:flex md:flex-row">
                        <div>
                            <label>Hole 1</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h1} onChange={e => setH1(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 2</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number"  value={h2} onChange={e => setH2(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 3</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h3} onChange={e => setH3(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 4</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h4} onChange={e => setH4(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 5</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h5} onChange={e => setH5(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 6</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h6} onChange={e => setH6(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 7</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h7} onChange={e => setH7(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 8</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h8} onChange={e => setH8(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 9</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h9} onChange={e => setH9(e.target.value)} />
                            </div>
                        </div>
                        </div>
                        <div className="md:flex md:flex-row">
                        <div>
                            <label>Hole 10</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h10} onChange={e => setH10(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 11</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h11} onChange={e => setH11(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 12</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h12} onChange={e => setH12(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 13</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h13} onChange={e => setH13(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 14</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h14} onChange={e => setH14(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 15</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h15} onChange={e => setH15(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 16</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h16} onChange={e => setH16(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 17</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h17} onChange={e => setH17(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Hole 18</label>
                            <div className="w-20 h-20 flex text-3xl mb-4">
                                <input className="round" type="number" value={h18} onChange={e => setH18(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-4 text-xl">
                        <button className=" hover:text-gray-300 click:text-gray-300">{title}</button>
                </div>
            </div>
        </form>
    )
}
