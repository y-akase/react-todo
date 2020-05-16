import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../stores';
import { ShowMode, completeTodo, deleteTodo } from '../../stores/todo';
import {
  List,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Todos() {
  const todoList = useSelector((state: RootState) => state.todo);

  const dispatch = useDispatch();

  return (
    <List>
      {todoList.todos
        .filter((x) => {
          if (todoList.mode === ShowMode.All) return true;
          if (todoList.mode === ShowMode.Incomplete) return !x.isComplete;
          if (todoList.mode === ShowMode.Completed) return x.isComplete;
          return true;
        })
        .map((todo) => (
          <ListItem
            key={todo.id}
            button
            onClick={() => dispatch(completeTodo(todo.id))}
          >
            <Checkbox
              name={todo.id.toString()}
              id={todo.id.toString()}
              checked={todo.isComplete}
            />
            <ListItemText primary={todo.title} />
            <ListItemSecondaryAction>
              <IconButton
                aria-label="delete"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
  );
}
