// src/features/tasks/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    editTask: (state, action) => {
      const index = action.payload;
      const task = prompt("Edit Task:", state[index]);
      if (task !== null) {
        state[index] = task;
      }
    },
  },
});

export const { addTask, removeTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
