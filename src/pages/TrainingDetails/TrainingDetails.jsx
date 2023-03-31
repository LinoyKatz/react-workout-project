import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { trainingData } from "../../data/trainingData";
import "./trainingDetails.css";
import { AiOutlineInstagram, AiOutlineStar } from "react-icons/ai";

const TrainingDetails = () => {
  const trainingId = useParams().id;
  const [training, setTraining] = useState({});

  const { type, hour, date, coach, level, img, isPaid } = training;

  useEffect(() => {
    setTraining(trainingData.filter((t) => t.id === trainingId)[0]);
  }, []);

  // const LEVEL =<AiOutlineStar/>;
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
