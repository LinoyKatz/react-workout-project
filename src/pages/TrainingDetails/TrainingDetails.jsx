import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./trainingDetails.css";
import { trainingData } from "../../data/trainingData";

//a section with more info about the workout- not finished and not in use at the moment. i used API instead

const TrainingDetails = () => {
  const trainingId = useParams().id;
  const [training, setTraining] = useState({});

  const { type, hour, date, coach, level, isPaid } = training;

  useEffect(() => {
    setTraining(trainingData.filter((t) => t.id === trainingId)[0]);
  }, []);

  const LEVEL = "💪";

  return (
    <div className="details-sec">
      {!training ? (
        "Loading..."
      ) : (
        <section className="one-training">
          <h1>{type}</h1>
          <h3>Date: {date}</h3>
          <h3> Time:{hour}</h3>
          <h4>Level: {LEVEL.repeat(level)}</h4>
          <p>Coach: {coach}</p>
          <mark style={{ backgroundColor: !isPaid && "pink" }}>
            Did i pay? {isPaid ? "✅" : "❌"}
          </mark>
        </section>
      )}
    </div>
  );
};

export default TrainingDetails;
