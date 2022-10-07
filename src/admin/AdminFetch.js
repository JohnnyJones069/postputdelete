import axios from "axios";

const axiosBase = axios.create({baseURL: 'http://localhost:5099/'})

export const getToursTeaser = () => {
    let response = axiosBase.get("tours/teaser/");
    return response;
}

export const deleteTour = (tourID) => {
    let response = axiosBase.delete("tours/admin/" + tourID);
    return response;
}