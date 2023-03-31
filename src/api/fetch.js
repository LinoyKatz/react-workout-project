import axios from "axios";

// ExerciseDB;  RapidAPI

const URL = "https://exercisedb.p.rapidapi.com/exercises";
const APIKEY = "89314b4811msh49eaadf54dfa80bp1247f2jsn49425defdfed";
// const APIKEY = "9ca1cf59ecmshc5744e129a4ca8fp1d7537jsn453756def234";
const HOST = "exercisedb.p.rapidapi.com";
const method = "GET";

export const getAllTrainingsFromApi = (setTrainings) => {
  const options = {
    method,
    url: URL,
    headers: {
      "X-RapidAPI-Key": APIKEY,
      "X-RapidAPI-Host": HOST,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setTrainings(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getTrainingByName = (name, setEx) => {
  console.log("id:", name);

  const options1 = {
    method,
    url: `${URL}/name/${name}`,
    headers: {
      "X-RapidAPI-Key": APIKEY,
      "X-RapidAPI-Host": HOST,
    },
  };

  axios
    .request(options1)
    .then(function (response) {
      setEx(response.data[0]);
    })
    .catch(function (error) {
      console.error(error);
    });
};
