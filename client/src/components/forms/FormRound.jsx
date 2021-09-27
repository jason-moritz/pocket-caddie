export default function FormScorecard(props) {
    const { 
            toggle,
            handleToggle, 
            playerID, 
            courseName, 
            h1, 
            setH1, 
            h2, 
            setH2, 
            h3, 
            setH3, 
            h4, 
            setH4, 
            h5, 
            setH5, 
            h6, 
            setH6, 
            h7, 
            setH7, 
            h8, 
            setH8, 
            h9, 
            setH9, 
            h10, 
            setH10, 
            h11, 
            setH11, 
            h12, 
            setH12, 
            h13, 
            setH13, 
            h14, 
            setH14, 
            h15, 
            setH15, 
            h16, 
            setH16, 
            h17, 
            setH17, 
            h18, 
            setH18, 
            title, 
            handleSubmit 
        } = props;

    return (
        <form 
            className="text-gray-100 w-screen mt-5 flex justify-center" 
            onSubmit={playerID !== "" && courseName !== "" && h1 !== "" && h2 !== "" && h3 !== "" && h4 !== "" && h5 !== "" && h6 !== "" && h7 !== "" && h8 !== "" && h9 !== "" && h10 !== "" && h11 !== "" && h12 !== "" && h13 !== "" && h14 !== "" && h15 !== "" && h16 !== "" && h17 !== "" && h18 !== "" ? handleSubmit : handleToggle}>
            <div className="w-3/4 flex justify-center flex-col items-center">
                <div className="w-full max-w-lg text-center flex flex-col items-center">
                    <div className="text-xl mb-4 text-center sm:text-2xl">
                        Please enter a score from 1-10 
                        <br />
                        (give up after 10 strokes)
                    </div>       
                    {toggle > 0 ? 
                        <div className="error">Please enter a number for each hole.</div> 
                    : 
                        null
                    }
                    <div className="flex flex-row sm:flex-col">
                        <div className="flex flex-col items-center mr-2 sm:flex-row sm:m-0">
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 1</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h1} 
                                        onChange={e => setH1(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 2</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h2} 
                                        onChange={e => setH2(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 3</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h3} 
                                        onChange={e => setH3(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 4</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h4} 
                                        onChange={e => setH4(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 5</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h5} 
                                        onChange={e => setH5(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 6</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h6} 
                                        onChange={e => setH6(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 7</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h7} 
                                        onChange={e => setH7(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 8</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h8} 
                                        onChange={e => setH8(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 9</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h9} 
                                        onChange={e => setH9(e.target.value)} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center ml-2 sm:flex sm:flex-row sm:m-0">
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 10</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h10} 
                                        onChange={e => setH10(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 11</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h11} 
                                        onChange={e => setH11(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 12</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h12} 
                                        onChange={e => setH12(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 13</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h13} 
                                        onChange={e => setH13(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 14</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h14} 
                                        onChange={e => setH14(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 15</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h15} 
                                        onChange={e => setH15(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 16</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h16} 
                                        onChange={e => setH16(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 17</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h17} 
                                        onChange={e => setH17(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="sm:mx-4">
                                <label className="text-xl sm:text-3xl">Hole 18</label>
                                <div className="w-16 h-16 sm:w-24 sm:h-24 sm:text-5xl  mt-1 flex text-3xl mb-4">
                                    <input 
                                        className="round" 
                                        type="number" 
                                        min="1" 
                                        max="20" 
                                        value={h18} 
                                        onChange={e => setH18(e.target.value)} 
                                    />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="justify-center mb-4 text-xl sm:mt-2">
                        <button className="btn">{title}</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
