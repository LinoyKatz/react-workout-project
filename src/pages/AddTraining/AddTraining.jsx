import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllTrainingsFromApi } from "../../api/fetch";
import { useForm } from "../../hooks/useForm";
import {
  addTraining,
  editTraining,
  getTrainingById,
} from "../../service/localStorage";
import "./addTraining.css";

const AddTraining = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [trainings, setTrainings] = useState([]);

  const { inputValues, handleChange, resetForm, setForm } = useForm({
    type: "",
    coach: "",
    level: 1,
    date: "",
    hour: "",
    isPaid: false,
  });

  useEffect(() => {
    getAllTrainingsFromApi(setTrainings);
  }, []);

  useEffect(() => {
    if (id) {
      const training = getTrainingById(id);
      setForm(training);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValues.coach === "") {
      alert("Choose coach please");
      return;
    } else {
      id ? editTraining(id, inputValues) : addTraining(inputValues);
      resetForm();
      navigate("/training");
    }
  };

  return (
    <div>
      <h2 className="createTrainingFormH2">
        {id ? " Edit " : "Create "}
        Training
      </h2>
      <form onSubmit={handleSubmit}>
        <select
          name="type"
          id="type"
          onChange={handleChange}
          value={inputValues.type}
        >
          <option selected value="">
            type of workout
          </option>
          {trainings.map((training) => (
            <option value={training.name} key={training.id} id="type">
              {training.name}
            </option>
          ))}
        </select>

        <select
          name="coach"
          id="value"
          onChange={handleChange}
          value={inputValues.coach}
        >
          <option selected disabled>
            choose your fav coach
          </option>
          <option value="">Choose coach</option>
          <option value="Suzan">Suzan</option>
          <option value="Mark">Mark</option>
          <option value="Linoy">Linoy</option>
          <option value="Arik">Arik!!!!</option>
        </select>

        <input
          type="number"
          placeholder="level"
          id="level"
          name="level"
          onChange={handleChange}
          value={inputValues.level}
          required
          min="1"
          max="5"
        />

        <input
          type="date"
          placeholder="date"
          id="date"
          name="date"
          onChange={handleChange}
          value={inputValues.date}
          required
        />

        <input
          type="time"
          placeholder="hour"
          id="hour"
          name="hour"
          onChange={handleChange}
          value={inputValues.hour}
          required
        />

        <section className="is-Paid-section">
          <label name="isPaid" className="isPaidLabel">
            Did i pay?
          </label>
          <input
            className="isPaidCheckbox"
            type="checkbox"
            placeholder="did i paid?"
            id="isPaid"
            name="isPaid"
            onChange={handleChange}
            value={inputValues.isPaid}
          />
        </section>

        <section className="buttons-container">
          <button className="submit-btn">GO!</button>
          <Link to="/training">
            <button className="back-btn">back</button>
          </Link>
        </section>
      </form>
    </div>
  );
};

export default AddTraining;
