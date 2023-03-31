import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddTraining from "../AddTraining/AddTraining";
import {
  deleteTraining,
  getTrainingByType,
  getTrainingList,
} from "../../service/localStorage";

import "./trainingList.css";
import SearchBar from "../../components/SearchBar/SearchBar";

//here the user can track and watch all of his privious and future workouts
const TrainingList = () => {
  const [arrayToShow, setArrayToShow] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    setArrayToShow(getTrainingList);
  }, []);

  const setType = (value, name) => {
    value === "all"
      ? setArrayToShow(getTrainingList)
      : setArrayToShow(getTrainingByType(value, name));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this training?")) {
      deleteTraining(id);
      setArrayToShow(getTrainingList);
    } else return;
  };

  const LEVEL = "💪";

  return (
    <section className="training-list">
      <article>
        <h1>My own workout plan</h1>
        <br />
        <hr />
        <br />
        <h2>You had {arrayToShow.length} trainigs</h2>
        <SearchBar setType={setType} />
        <hr />
      </article>
      <Link to="/create">
        <button className="add-btn" onClick={() => setIsAdding(!isAdding)}>
          Add A New Training
        </button>
      </Link>
      <div className="list">
        {arrayToShow.map((item) => (
          <section className="preview-sec" key={item.id}>
            <Link to={`/training/${item.id}`} key={item.id}>
              {""}
              <div className="training-box">
                <h3>{item.type}</h3>
                <p>{item.coach}</p>
                <p>date: {item.date}</p>
                <p>hour: {item.hour} </p>
                <p>{LEVEL.repeat(item.level)} </p>
                <p>{item.isPaid ? "I paid ✅" : "I didnt pay ❌"} </p>
              </div>
            </Link>

            <div className="btns-panel">
              <Link to={`/edit/${item.id}`}>
                <button className="edit-btn">✏️</button>
              </Link>
              <button
                className="edit-btn"
                onClick={() => handleDelete(item.id)}
              >
                🗑️
              </button>
            </div>
          </section>
        ))}
      </div>

      {/* {isAdding && <AddTraining setArrayToShow={setArrayToShow}
      arrayToShow={arrayToShow} setIsAdding={setIsAdding} />} */}
    </section>
  );
};

export default TrainingList;
