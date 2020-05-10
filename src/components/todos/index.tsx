import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../stores';
import { completeTodo, deleteTodo } from '../../stores/todo';

export default function Todos() {
  const todoList = useSelector((state: RootState) => state.todo);

  const dispatch = useDispatch();

  return (
    <ul>
      {todoList.todos.map((todo) => (
        <li>
          <input
            type="checkbox"
            name={todo.id.toString()}
            id={todo.id.toString()}
            onClick={() => dispatch(completeTodo(todo.id))}
            checked={todo.isComplete}
          />
          {todo.title}
          <button onClick={() => dispatch(deleteTodo(todo.id))}>削除</button>
        </li>
      ))}
    </ul>
  );
}
