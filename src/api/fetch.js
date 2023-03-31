import axios from "axios";

// ExerciseDB;  RapidAPI

const URL = "https://exercisedb.p.rapidapi.com/exercises";
const APIKEY = "fb6e6571dcmsh9d160ef28b3a859p1ab27djsn086531660161";
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

/**
 * It takes a name and a setEx function as parameters, and then it makes an API call to get the
 * exercise data, and then it sets the exercise data to the state.
 */
export const getTrainingByName = (name, setEx) => {
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
