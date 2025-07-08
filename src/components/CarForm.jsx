import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.form.name);
  const cost = useSelector((state) => state.form.cost);

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const parsedCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(parsedCost));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleFormSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="input is-expanded"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="cost">
              Cost
            </label>
            <input
              type="number"
              className="input is-expanded"
              id="cost"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
