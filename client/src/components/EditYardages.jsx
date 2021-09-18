import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchPlayerDetails, editPlayer } from "../services";
import FormYardages from "./FormYardages";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditYardages() {
    const [playerName, setPlayerName] = useState("");
    const [lw, setLw] = useState("");
    const [sw, setSw] = useState("");
    const [aw, setAw] = useState("");
    const [pw, setPw] = useState("");
    const [nineir, setNineir] = useState("");
    const [eightir, setEightir] = useState("");
    const [sevenir, setSevenir] = useState("");
    const [sixir, setSixir] = useState("");
    const [fiveir, setFiveir] = useState("");
    const [fourir, setFourir] = useState("");
    const [threeir, setThreeir] = useState("");
    const [twoir, setTwoir] = useState("");
    const [fivewd, setFivewd] = useState("");
    const [threewd, setThreewd] = useState("");
    const [hybrid, setHybrid] = useState("");
    const [driver, setDriver] = useState("");
    const history = useHistory();
    const { id } = useParams();

    const fields = {
        lw,
        sw,
        aw,
        pw,
        nineir,
        eightir,
        sevenir,
        sixir,
        fiveir,
        fourir,
        threeir,
        twoir,
        fivewd,
        threewd,
        hybrid,
        driver,
    };

    useEffect(() => {
        const getDetails = async() => {
            let res = await fetchPlayerDetails(id);
            setPlayerName(res.playerName);
            setLw(res.lw);
            setSw(res.sw);
            setAw(res.aw);
            setPw(res.pw);
            setNineir(res.nineir);
            setEightir(res.eightir);
            setSevenir(res.sevenir);
            setSixir(res.sixir);
            setFiveir(res.fiveir);
            setFourir(res.fourir);
            setThreeir(res.threeir);
            setTwoir(res.twoir);
            setFivewd(res.fivewd);
            setThreewd(res.threewd);
            setDriver(res.driver);
        };
        getDetails();
    }, [id]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const res = await editPlayer(id, fields);
        toast(`You have editted ${playerName}'s yardages!`);
        history.push(`/players/${id}`);
    };

    return (
        <div>
            <FormYardages
                lw={lw}
                setLw={setLw}
                sw={sw}
                setSw={setSw}
                aw={aw}
                setAw={setAw}
                pw={pw}
                setPw={setPw}
                nineir={nineir}
                setNineir={setNineir}
                eightir={eightir}
                setEightir={setEightir}
                sevenir={sevenir}
                setSevenir={setSevenir}
                sixir={sixir}
                setSixir={setSixir}
                fiveir={fiveir}
                setFiveir={setFiveir}
                fourir={fourir}
                setFourir={setFourir}
                threeir={threeir}
                setThreeir={setThreeir}
                twoir={twoir}
                setTwoir={setTwoir}
                fivewd={fivewd}
                setFivewd={setFivewd}
                threewd={threewd}
                setThreewd={setThreewd}
                hybrid={hybrid}
                setHybrid={setHybrid}
                driver={driver}
                setDriver={setDriver}
                handleSubmit={handleSubmit}
                title="Edit Yardages"
            />
        </div>
    )
}