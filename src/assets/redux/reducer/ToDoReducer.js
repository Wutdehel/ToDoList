import { createSlice } from '@reduxjs/toolkit'

export const toDoReducer = createSlice({
  name: 'test',
  initialState: {
    filter: 'all'
  },
  reducers: {
    
    setFilter: (state, action) => {
        state.filter = action.payload;
    },

  },
})

// Action creators are generated for each case reducer function
export const { setFilter } = toDoReducer.actions

export default toDoReducer.reducer