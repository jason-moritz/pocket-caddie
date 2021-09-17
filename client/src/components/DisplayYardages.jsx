import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPlayerDetails } from "../services";


export default function DisplayYardages() {
    const [yardages, setYardages] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getYardages = async() => {
            setYardages(await fetchPlayerDetails(id));
        };
        getYardages();
    }, []);

    if (!yardages) return <h2>Loading</h2>

    return (
        <div>
            <h4>Driver: {yardages?.driver}</h4>
            <h4>3 Wood: {yardages?.threewd}</h4>
            <h4>5 Wood: {yardages?.fivewd}</h4>
            <h4>Hybrid: {yardages?.hybrid}</h4>
            <h4>2 Iron: {yardages?.twoir}</h4>
            <h4>3 Iron: {yardages?.threeir}</h4>
            <h4>4 Iron: {yardages?.fourir}</h4>
            <h4>5 Iron: {yardages?.fiveir}</h4>
            <h4>6 Iron: {yardages?.sixir}</h4>
            <h4>7 Iron: {yardages?.sevenir}</h4>
            <h4>8 Iron: {yardages?.eightir}</h4>
            <h4>9 Iron: {yardages?.nineir}</h4>
            <h4>P Wedge: {yardages?.pw}</h4>
            <h4>A Wedge: {yardages?.aw}</h4>
            <h4>S Wedge: {yardages?.sw}</h4>
            <h4>L Wedge: {yardages?.lw}</h4>
        </div>
    )
}
