import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const URL = `https://api.airtable.com/v0/${airtableBase}/caddie`;

const config = {
    headers: {
        Authorization: `Bearer ${airtableKey}`,
    }
};

export const createPlayer = async(fields) => {
    const res = await axios.post(URL, { fields }, config);
    return res.data;
};