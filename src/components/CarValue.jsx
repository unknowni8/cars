// import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

// const memoizedValue = createSelector(
//   [(state) => state.cars.data, (state) => state.cars.searchTerm],
//   (data, searchTerm) => {
//     return data
//       .filter((car) =>
//         car.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//       .reduce((acc, car) => acc + car.cost, 0);
//   }
// );
function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    return data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0);
  });
  return <div className="car-value">Total cost: ${totalCost}</div>;
}

export default CarValue;
