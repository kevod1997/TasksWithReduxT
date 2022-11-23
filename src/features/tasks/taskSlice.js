import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksItems: localStorage.getItem("tasksItems")
  ? JSON.parse(localStorage.getItem("tasksItems"))
  : []
};


export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasksItems.push(action.payload);
      localStorage.setItem("tasksItems", JSON.stringify(state.tasksItems));
    },
    editTask: (state, action) => {
        const { id, title, description } = action.payload;
        const foundTask = state.tasksItems.find((task) => task.id === id);
        if (foundTask) {
          foundTask.title = title;
          foundTask.description = description;
          localStorage.setItem("tasksItems", JSON.stringify(state.tasksItems));
        return state;
        }
      },
    deleteTask: (state, action) => {
      const taskFound = state.tasksItems.find((task) => task.id === action.payload);
      if (taskFound) {
        state.tasksItems.splice(state.tasksItems.indexOf(taskFound), 1);
        localStorage.setItem("tasksItems", JSON.stringify(state.tasksItems));
        return state;
      }
    },
    deleteTasks: (state, action) => {
      state.tasksItems = [];
      localStorage.setItem("tasksItems", JSON.stringify(state.tasksItems));
    },
  },
});

export const { addTask, deleteTask, editTask, deleteTasks } = taskSlice.actions;

export default taskSlice.reducer;
