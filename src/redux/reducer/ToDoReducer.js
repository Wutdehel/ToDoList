import { createSlice } from '@reduxjs/toolkit'

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
      removeData: (state, action) => {
        const idRemove = action.payload;
        state.data = state.data.filter(item => item.id !== idRemove);
      },
      editData: (state, action) => {
        const { id, todo } = action.payload; // Ambil ID dan data input dari action payload
        const index = state.data.findIndex(item => item.id === id);
        if (index !== -1) {
          state.data[index].todo = todo; // Ubah nilai 'todo' sesuai dengan input
        }
      },

  },
})

// Action creators are generated for each case reducer function
export const { addData, setFilter, toggleConfirmed, removeData, editData } = toDoReducer.actions

export default toDoReducer.reducer