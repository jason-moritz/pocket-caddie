import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const baseURL = `https://api.airtable.com/v0/${airtableBase}/`
const playerURL = `https://api.airtable.com/v0/${airtableBase}/players`;
const courseURL = `https://api.airtable.com/v0/${airtableBase}/courses`;

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

export const getCourses = async() => {
    try {
        const res = await axios.get(courseURL, config);
        return res.data.records;
    } catch(error) {
        console.log(error);
    };
};

export const fetchPlayerDetails = async(id) => {
    try {
        const res = await axios.get(`${playerURL}/${id}`, config);
        return res.data.fields;
    } catch(error) {
        console.log(error);
    };
};

export const fetchCourseDetails = async(id) => {
    try {
        const res = await axios.get(`${courseURL}/${id}`, config);
        return res.data.fields;
    } catch(error) {
        console.log(error);
    };
};

export const editPlayer = async(id, fields) => {
    try {
        const res = await axios.patch(`${playerURL}/${id}`, { fields }, config);
    return res.data;
    } catch(error) {
        console.log(error);
    };
};

export const editCourse = async(id, fields) => {
    try {
        const res = await axios.patch(`${courseURL}/${id}`, { fields }, config);
    return res.data;
    } catch(error) {
        console.log(error);
    };
};

export const deleteItem = async(group, id) => {
    try {
        const res = await axios.delete(`${baseURL}${group}/${id}`, config);
        console.log(`${baseURL}${group}/{${id}`)
        return res.data.fields;
    } catch(error) {
        console.log(error);
    };
};