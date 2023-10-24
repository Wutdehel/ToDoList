import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const toDoReducer = createSlice({
  name: 'test',
  initialState: {
    data: [],
    filter: 'all'
  },
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },

    setFilter: (state, action) => {
        state.filter = action.payload;
    },

    toggleConfirmed: (state, action) => {
        const id = action.payload;
        const updatedData = state.data.map(item => {
          if (item.id === id) {
            return { ...item, confirmed: !item.confirmed }; // Create a new object with the updated value
          }
          return item;
        });
        state.data = updatedData;
      },

  },
})

// Action creators are generated for each case reducer function
export const { addData, setFilter, toggleConfirmed } = toDoReducer.actions

export default toDoReducer.reducer