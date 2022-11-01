import axios from "axios";

const axiosBase = axios.create({ baseURL: "http://localhost:5099/" });

// GET - tag alle Tours fra API
export const getAllTours = () => {
  let response = axiosBase.get("tours/");
  return response;
};

// GET - Søg i tours 
export const searchTours = (searchKey) => {

  // http://localhost:5099/tours/soeg/xxxxxxxx
  let response = axiosBase.get("tours/soeg/" + searchKey);
  return response;
};

// GET - tag specifik ID
export const getTourByID = (ID) => {
  let response = axiosBase.get("tours/" + ID);
  return response;
};

// GET - tag teaser fra API
export const getToursTeaser = () => {
  let response = axiosBase.get("tours/teaser/");
  return response;
};

// GET - Tag About fra API
export const getAbout = () => {
  let response = axiosBase.get("about/");
  return response;
}

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

//  Put - ret tour
export const editTour = (updatedTour, tourID) => {
  let response = axiosBase.put("tours/admin/" + tourID, updatedTour );
  return response;
};

// PUT - RET About
export const editAbout = (updatedAbout) => {
  let response = axiosBase.put("about/admin", updatedAbout);
  return response;
}
