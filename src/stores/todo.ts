import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ShowMode {
  All,
  Incomplete,
  Completed,
}

interface Todo {
  id: number;
  title: string;
  isComplete: boolean;
}

interface TodoList {
  count: number;
  mode: ShowMode;
  todos: Todo[];
}

const initialState: TodoList = {
  count: 0,
  mode: ShowMode.All,
  todos: [],
};

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state: TodoList, action: PayloadAction<string>) => {
      state.todos.push({
        id: state.count,
        title: action.payload,
        isComplete: false,
      });
      state.count++;
    },
    completeTodo: (state: TodoList, action: PayloadAction<number>) => {
      const todo = state.todos.find((s) => s.id === action.payload);
      if (todo) {
        todo.isComplete = !todo.isComplete;
      }
    },
    deleteTodo: (state: TodoList, action: PayloadAction<number>) => {
      const newTodo = state.todos.filter((x) => x.id !== action.payload);
      state.todos = newTodo;
    },
    setMode: (state: TodoList, action: PayloadAction<ShowMode>) => {
      state.mode = action.payload;
    },
  },
});

export default slice.reducer;

export const { addTodo, completeTodo, deleteTodo, setMode } = slice.actions;
