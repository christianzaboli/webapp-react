import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ReviewForm({ reRender }) {
  const { id } = useParams();
  const apiDB = `http://localhost:3000/api/movies/${id}/reviews`;
  const initialVals = {
    name: "",
    vote: 1,
    text: "",
  };
  const [formData, setFormData] = useState(initialVals);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiDB, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(setFormData(initialVals), reRender())
      .catch((err) => console.log(err));
  };
  function setFieldValue(e) {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-group">
        <input
          className="form-body"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={setFieldValue}
          required
        />
        <input
          type="text"
          name="text"
          value={formData.text}
          placeholder="Comment"
          onChange={setFieldValue}
          required
        />
        <input
          type="number"
          name="vote"
          min={1}
          max={5}
          value={formData.vote}
          onChange={setFieldValue}
          required
        />
        <button className="btn btn-primary">Invia</button>
      </form>
    </div>
  );
}
