import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../stores';
import { completeTodo, deleteTodo } from '../../stores/todo';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Todos() {
  const todoList = useSelector((state: RootState) => state.todo);

  const dispatch = useDispatch();

  return (
    <ul>
      {todoList.todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            name={todo.id.toString()}
            id={todo.id.toString()}
            onClick={() => dispatch(completeTodo(todo.id))}
            defaultChecked={todo.isComplete}
          />
          {todo.title}
          <IconButton
            aria-label="delete"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            <DeleteIcon />
          </IconButton>
        </li>
      ))}
    </ul>
  );
}
