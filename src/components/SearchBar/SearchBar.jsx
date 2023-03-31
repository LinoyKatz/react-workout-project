import React, { useEffect, useState } from "react";
import { getTrainingByType } from "../../service/localStorage";
import { FiFilter } from "react-icons/fi";
import { getAllTrainingsFromApi } from "../../api/fetch";

const SearchBar = ({ setType }) => {
  const [trainings, setTrainings] = useState([]);
  useEffect(() => {
    getAllTrainingsFromApi(setTrainings);
  }, []);

  return (
    <div className="select-bar-div">
      <select
        className="select-bar"
        name="type"
        id="type"
        onChange={(e) => setType(e.target.value, e.target.name)}
      >
        <option value="all">All types</option>
        <option selected value="">
          type of workout
        </option>
        {trainings.map((training) => (
          <option value={training.name} key={training.id} id="type">
            {training.name}
          </option>
        ))}
        {/* <option value="TRX">TRX</option>
        <option value="hiit">Hiit</option>
        <option value="running">Running</option> */}
      </select>
      <FiFilter size="40px" />
      <select
        className="select-bar"
        name="coach"
        id="coach"
        onChange={(e) => setType(e.target.value, e.target.name)}
      >
        <option value="all">All coaches</option>
        <option value="Suzan">Suzan</option>
        <option value="Mark">Mark</option>
        <option value="Linoy">Linoy</option>
        <option value="Kelly">Kelly</option>
      </select>
      <FiFilter size="40px" />
    </div>
  );
};

export default SearchBar;
