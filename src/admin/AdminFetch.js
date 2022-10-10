import axios from "axios";

const axiosBase = axios.create({ baseURL: "http://localhost:5099/" });

// GET - tag teaser fra API
export const getToursTeaser = () => {
  let response = axiosBase.get("tours/teaser/");
  return response;
};

// Delete - slet udvalgt tour
export const deleteTour = (tourID) => {
  let response = axiosBase.delete("tours/admin/" + tourID);
  return response;
};

//  Post - opret tour
export const createTour = (newTour) => {
  let response = axiosBase.post("tours/admin", newTour );
  return response;
};
