import { v4 } from "uuid";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface Task {
  id: string;
  content: string;
  complete: boolean;
}

// action과 reducer 한번에 정의 가능
export const tasks = createSlice({
  name: "tasks",
  initialState: [] as Task[],
  reducers: {
    add: {
      reducer: (state: Task[], action: PayloadAction<Task>) => {
        state.push(action.payload);
      },
      prepare: (content: string) => ({
        payload: {
          id: v4(),
          content,
          complete: false,
        },
      }),
    },
    update: {
      reducer: (state: Task[], action: PayloadAction<Task>) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        state[index] = action.payload;
      },
      prepare: (id: string, content: string, complete: boolean) => ({
        payload: {
          id,
          content,
          complete,
        },
      }),
    },
    remove: {
      reducer: (state: Task[], action: PayloadAction<Pick<Task, "id">>) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) state.splice(index, 1);
      },
      prepare: (id: string) => ({
        payload: {
          id,
        },
      }),
    },
  },
});
