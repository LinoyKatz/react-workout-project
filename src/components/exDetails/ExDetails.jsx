import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getTrainingByName } from "../../api/fetch";
import { trainingData } from "../../data/trainingData";
import { codeStr, getTrainingById } from "../../service/localStorage";

import "./exDetails.css";

//explenation and details about each exercise (using API)
const ExDetails = () => {
  const exId = useParams().id;
  const [training, setTraining] = useState({});
  const [ex, setEx] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTraining(getTrainingById(exId));
  }, []);

  useEffect(() => {
    if (ex) {
      getTrainingByName(
        encodeURIComponent(training.type).replace(/%20/g, "%20"),
        setEx
      );
      setIsLoading(false);
    }
  }, [training]);

  return (
    <div className="ex-details-section">
      {isLoading && "LOADING..."}
      {/* {!ex ? (
        "LOADING..."
      ) : ( */}
      {ex && (
        <section>
          <h1>Exercize name: {ex.name}</h1>

          <h2>good for : {ex.target}</h2>
          <h2>use your : {ex.bodyPart}</h2>
          <h2>you need: {ex.equipment}</h2>
          <img src={ex.gifUrl} alt={ex.name} />
        </section>
      )}
      <Link to="/training">
        <button className="back-to-trainings-btn">Back to trainings</button>
      </Link>
    </div>
  );
};

export default ExDetails;
