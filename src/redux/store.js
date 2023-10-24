import { configureStore } from '@reduxjs/toolkit'
import ToDoReducer from './reducer/ToDoReducer'

export const store = configureStore({
  reducer: {
    data: ToDoReducer,
  },
})