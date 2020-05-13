import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../stores';
import { completeTodo, deleteTodo } from '../../stores/todo';
import {
  List,
  ListItem,
  ListItemAvatar,
  Checkbox,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

export default function Todos() {
  const todoList = useSelector((state: RootState) => state.todo);

  const dispatch = useDispatch();

  return (
    <List dense={false}>
      {todoList.todos.map((todo) => (
        <ListItem key={todo.id}>
          <ListItemAvatar>
            <Avatar>
              <CreateIcon />
            </Avatar>
          </ListItemAvatar>
          <Checkbox
            name={todo.id.toString()}
            id={todo.id.toString()}
            onClick={() => dispatch(completeTodo(todo.id))}
            defaultChecked={todo.isComplete}
          />
          <ListItemText primary={todo.title}></ListItemText>
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
