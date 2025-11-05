import { useState } from "react";
import axios from "axios";
import { useDefaultContext } from "../../context/DefaultContext";

export default function ReviewForm() {
  const apiDB = useDefaultContext();
  const initialVals = {
    name: "",
    vote: 1,
    text: "",
  };
  const [formData, setFormData] = useState(initialVals);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${apiDB}/${id}/reviews`, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(setFormData(initialVals))
      .catch((err) => console.log(err));
  }
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
        <button className="btn btn-primary" type="submit">
          Invia
        </button>
      </form>
    </div>
  );
}
