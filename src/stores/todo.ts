import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  todo: string;
  isComplete: boolean;
}

interface TodoList {
  count: number;
  todos: Todo[];
}

const initialState: TodoList = {
  count: 0,
  todos: [],
};

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state: TodoList, action: PayloadAction<string>) => {
      state.todos.push({
        id: state.count,
        todo: action.payload,
        isComplete: false,
      });
      state.count++;
    },
  },
});

export default slice.reducer;

export const { addTodo } = slice.actions;
