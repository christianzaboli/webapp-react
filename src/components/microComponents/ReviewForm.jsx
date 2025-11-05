import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ReviewForm({ reRender, idProp }) {
  // link api per post
  const apiDB = `http://localhost:3000/api/movies/${idProp}/reviews`;

  // valori di start state
  const initialVals = {
    name: "",
    vote: 1,
    text: "",
  };

  // stato di controllo form
  const [formData, setFormData] = useState(initialVals);

  // funzione di form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiDB, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(setFormData(initialVals), reRender())
      .catch((err) => console.log(err));
  };
  // aggiornamento campi form
  function setFieldValue(e) {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="border border-1 p-3">
      <p>
        <em>Add your review</em>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={formData.name}
            onChange={setFieldValue}
            required
          />
        </div>
        <div className="mb-3">
          <label>Vote:</label>
          <input
            className="form-control"
            type="number"
            name="vote"
            min={1}
            max={5}
            value={formData.vote}
            onChange={setFieldValue}
            required
          />
        </div>
        <div className="mb-3">
          <label>Comment:</label>
          <textarea
            className="form-control"
            type="text"
            name="text"
            value={formData.text}
            onChange={setFieldValue}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
