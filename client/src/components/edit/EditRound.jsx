import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchDetails, editDetails } from "../../services";
import ButtonBack from "../buttons/ButtonBack";
import FormRound from "../forms/FormRound";
import { toast } from "react-toastify";


export default function EditRound() {
    const { id } = useParams();
    const history = useHistory();
    const [h1, setH1] = useState("");
    const [h2, setH2] = useState("");
    const [h3, setH3] = useState("");
    const [h4, setH4] = useState("");
    const [h5, setH5] = useState("");
    const [h6, setH6] = useState("");
    const [h7, setH7] = useState("");
    const [h8, setH8] = useState("");
    const [h9, setH9] = useState("");
    const [h10, setH10] = useState("");
    const [h11, setH11] = useState("");
    const [h12, setH12] = useState("");
    const [h13, setH13] = useState("");
    const [h14, setH14] = useState("");
    const [h15, setH15] = useState("");
    const [h16, setH16] = useState("");
    const [h17, setH17] = useState("");
    const [h18, setH18] = useState("");
    const [front9, setFront9] = useState("");
    const [back9, setBack9] = useState("");
    const [total, setTotal] = useState("");

    const fields = {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        h7,
        h8,
        h9,
        h10,
        h11,
        h12,
        h13,
        h14,
        h15,
        h16,
        h17,
        h18,
        front9,
        back9,
        total,
    };

    useEffect(() => {
        const getRound = async() => {
        let res = await fetchDetails("scores", id)
        setH1(res.h1);
        setH2(res.h2);
        setH3(res.h3);
        setH4(res.h4);
        setH5(res.h5);
        setH6(res.h6);
        setH7(res.h7);
        setH8(res.h8);
        setH9(res.h9);
        setH10(res.h10);
        setH11(res.h11);
        setH12(res.h12);
        setH13(res.h13);
        setH14(res.h14);
        setH15(res.h15);
        setH16(res.h16);
        setH17(res.h17);
        setH18(res.h18);
        };
        getRound();
    },[id]);

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
            };
            return total;
        }

        const sumFront9 = sumArr(front9Arr);
        const sumBack9 = sumArr(back9Arr);
        const totalScore = sumFront9 + sumBack9;

        setFront9(`${sumFront9}`);
        setBack9(`${sumBack9}`);
        setTotal(`${totalScore}`);
    };
    useEffect(() => {
        roundTotal();
    })

    const handleSubmit = async(e) => {
        e.preventDefault();

        await editDetails("scores", id, fields);
        toast(`You have editted the round scores!`)
        history.goBack();
    }

    return (
        <div className="text-gray-100">
            <ButtonBack />
            <div>
                <h2 className="text-center mb-5 text-4xl text-gray-100">Edit Round</h2>
            </div>
            <FormRound 
                h1={h1} 
                setH1={setH1} 
                h2={h2} 
                setH2={setH2} 
                h3={h3} 
                setH3={setH3} 
                h4={h4} 
                setH4={setH4} 
                h5={h5} 
                setH5={setH5} 
                h6={h6} 
                setH6={setH6} 
                h7={h7} 
                setH7={setH7} 
                h8={h8} 
                setH8={setH8} 
                h9={h9} 
                setH9={setH9} 
                h10={h10} 
                setH10={setH10} 
                h11={h11} 
                setH11={setH11} 
                h12={h12} 
                setH12={setH12} 
                h13={h13} 
                setH13={setH13} 
                h14={h14} 
                setH14={setH14} 
                h15={h15} 
                setH15={setH15} 
                h16={h16} 
                setH16={setH16} 
                h17={h17} 
                setH17={setH17} 
                h18={h18} 
                setH18={setH18} 
                handleSubmit={handleSubmit} 
                front9={front9} 
                setFront9={setFront9} 
                back9={back9} 
                setBack9={setBack9} 
                total={total} 
                setTotal={setTotal} 
                title="Edit Round" 
            />
        </div>
    )
}
