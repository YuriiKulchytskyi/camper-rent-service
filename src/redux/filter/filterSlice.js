import {
  createSlice
} from "@reduxjs/toolkit";


const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    location: '',
    type: '',
    equipment: '',
  },
  reducers: {
    changeLocation(state, action) {
      state.location = action.payload
    },
    changeType(state, action) {
      state.type = action.payload
    },
    changeEquipment(state, action) {
      state.equipment = action.payload
    }
  }
})

export const filterReducer = filterSlice.reducer;
