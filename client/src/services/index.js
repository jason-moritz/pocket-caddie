import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const baseURL = `https://api.airtable.com/v0/${airtableBase}/`

const baseImageURL = "https://api.cloudinary.com/v1_1/dwhdm5z4a/";

const config = {
    headers: {
        Authorization: `Bearer ${airtableKey}`,
    },
};

export const addNew = async(group, fields) => {
    try {
        const res = await axios.post(`${baseURL}${group}`, { fields }, config);
    return res.data;
    } catch(error) {
        console.log(error);
    };
};

export const fetchList = async(group) => {
    try {
        const res = await axios.get(`${baseURL}${group}`, config);
        return res.data.records;
    } catch(error) {
        console.log(error);
    };
};

export const fetchDetails = async(group, id) => {
    try {
        const res = await axios.get(`${baseURL}${group}/${id}`, config);
        return res.data.fields;
    } catch(error) {
        console.log(error);
    };
};

export const editDetails = async(group, id, fields) => {
    try {
        const res = await axios.patch(`${baseURL}${group}/${id}`, { fields }, config);
    return res.data;
    } catch(error) {
        console.log(error);
    };
};

export const deleteItem = async(group, id) => {
    try {
        const res = await axios.delete(`${baseURL}${group}/${id}`, config);
        return res.data.fields;
    } catch(error) {
        console.log(error);
    };
};

export const uploadImage = async(e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "pocketcaddieimages");
    const res = await axios.post(`${baseImageURL}image/upload`, data);
    return res.data;
}