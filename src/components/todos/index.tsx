import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores';

export default function Tasks() {
  const todoList = useSelector((state: RootState) => state.todo);
  return (
    <ul>
      {todoList.todos.map((todo) => (
        <li>{todo.todo}</li>
      ))}
    </ul>
  );
}
