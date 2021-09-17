import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const playerURL = `https://api.airtable.com/v0/${airtableBase}/players`;
const courseURL = `https://api.airtable.com/v0/${airtableBase}/courses`;
const yardageURL = `https://api.airtable.com/v0/${airtableBase}/yardages`;

const config = {
    headers: {
        Authorization: `Bearer ${airtableKey}`,
    },
};

export const addPlayer = async(fields) => {
    try {
        const res = await axios.post(playerURL, { fields }, config);
    return res.data;
    } catch(error) {
        console.log(error);
    };
};

export const addCourse = async(fields) => {
    try {
        const res = await axios.post(courseURL, { fields }, config);
    return res.data;
    } catch(error) {
        console.log(error);
    };
};

export const getPlayers = async() => {
    try {
        const res = await axios.get(playerURL, config);
        return res.data.records;
    } catch(error) {
        console.log(error);
    };
};