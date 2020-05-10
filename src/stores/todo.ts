import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  title: string;
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
  },
});

export default slice.reducer;

export const { addTodo, completeTodo, deleteTodo } = slice.actions;
