export default function FormScorecard(props) {
    const { h1, setH1, h2, setH2, h3, setH3, h4, setH4, h5, setH5, h6, setH6, h7, setH7, h8, setH8, h9, setH9, h10, setH10, h11, setH11, h12, setH12, h13, setH13, h14, setH14, h15, setH15, h16, setH16, h17, setH17, h18, setH18, handleSubmit, front9, setFront9, back9, setBack9, total, setTotal } = props;

    

    const roundTotal = () => {
        const front9String = [h1, h2, h3, h4, h5, h6, h7, h8, h9];
    const back9String = [h10, h11, h12, h13, h14, h15, h16, h17, h18];

    const front9Arr = front9String.map(number => (
        parseInt(number)
    ));

    const back9Arr = back9String.map(number => (
        parseInt(number)
    ));
    
    const sumArr = (arr) => {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i]
        }
        return total;
    }

    const sumFront9 = sumArr(front9Arr);
    const sumBack9 = sumArr(back9Arr);
    const totalScore = sumFront9 + sumBack9;

        setFront9(`${sumFront9}`);
        setBack9(`${sumBack9}`);
        setTotal(`${totalScore}`);
    };

    const twoCalls = (e) => {
        setH18(e.target.value)
        roundTotal();
    };

    return (
        <form className="text-gray-100 w-screen mt-5" onSubmit={handleSubmit}>
            <div className="flex justify-center">
                <div className="w-3/4 max-w-2xl">                    
                    <label>Hole 1</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h1} onChange={e => setH1(e.target.value)} />
                    <label>Hole 2</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h2} onChange={e => setH2(e.target.value)} />
                    <label>Hole 3</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h3} onChange={e => setH3(e.target.value)} />
                    <label>Hole 4</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h4} onChange={e => setH4(e.target.value)} />
                    <label>Hole 5</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h5} onChange={e => setH5(e.target.value)} />
                    <label>Hole 6</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h6} onChange={e => setH6(e.target.value)} />
                    <label>Hole 7</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h7} onChange={e => setH7(e.target.value)} />
                    <label>Hole 8</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h8} onChange={e => setH8(e.target.value)} />
                    <label>Hole 9</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h9} onChange={e => setH9(e.target.value)} />
                    <label>Hole 10</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h10} onChange={e => setH10(e.target.value)} />
                    <label>Hole 11</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h11} onChange={e => setH11(e.target.value)} />
                    <label>Hole 12</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h12} onChange={e => setH12(e.target.value)} />
                    <label>Hole 13</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h13} onChange={e => setH13(e.target.value)} />
                    <label>Hole 14</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h14} onChange={e => setH14(e.target.value)} />
                    <label>Hole 15</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h15} onChange={e => setH15(e.target.value)} />
                    <label>Hole 16</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h16} onChange={e => setH16(e.target.value)} />
                    <label>Hole 17</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h17} onChange={e => setH17(e.target.value)} />
                    <label>Hole 18</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={h18} onChange={e => setH18(e.target.value)} />
                    <div className="flex justify-center">
                        <button className=" hover:text-gray-300 click:text-gray-300">Finish Round</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
