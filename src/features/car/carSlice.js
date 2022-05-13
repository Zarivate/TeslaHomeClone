import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};

// Redux always has a few initial things, an initialState when you originally start the application and reducers/functions that you can use to manipulate the state. Also actions
const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

// Car is name of the slice we created above 'name: 'car'' while cars is our array.
// state.car.cars is mapping directly to the cars array. And selectCars will have that for us
export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
