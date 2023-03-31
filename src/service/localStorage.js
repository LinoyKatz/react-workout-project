// here we will have all the functions to read, edit, create and delete.

import uuid from "react-uuid";
import { trainingData } from "../data/trainingData";

export const getTrainingList = () => {
  if (!localStorage["trainingsLinoy"]) {
    localStorage["trainingsLinoy"] = JSON.stringify(trainingData);
  }

  let getTrainingListFromLocalStarage = JSON.parse(
    localStorage["trainingsLinoy"]
  );

  return getTrainingListFromLocalStarage;
};

export const addTraining = (training) => {
  const trainingList = getTrainingList();
  trainingList.push({ id: uuid(), ...training });
  localStorage["trainingsLinoy"] = JSON.stringify(trainingList);
};

export const getTrainingById = (id) => {
  const trainingList = getTrainingList();
  const training = trainingList.find((t) => t.id === id);
  return training;
};

export const editTraining = (id, newTraining) => {
  let trainingList = getTrainingList();
  let filteredTrainingList = trainingList.filter((t) => t.id !== id);
  filteredTrainingList.push({ id, ...newTraining });
  localStorage["trainingsLinoy"] = JSON.stringify(filteredTrainingList);
};

export const deleteTraining = (id) => {
  let trainingList = getTrainingList();
  trainingList = trainingList.filter((t) => t.id !== id);
  localStorage["trainingsLinoy"] = JSON.stringify(trainingList);
};

export const getTrainingByType = (value, name) => {
  const trainingList = getTrainingList();
  let filterList = [];
  filterList = trainingList.filter((training) =>
    name === "type"
      ? training.type.toLowerCase() === value.toLowerCase()
      : training.coach.toLowerCase() === value.toLowerCase()
  );
  return filterList;
};

export const codeStr = (str) => {
  console.log("aaa", str);
  console.log("bbbb", encodeURIComponent(str).replace(/%20/g, "%20"));
  return encodeURIComponent(str).replace(/%20/g, "%20");
};

// console.log(encodedStr); // "farmers%20walk"
