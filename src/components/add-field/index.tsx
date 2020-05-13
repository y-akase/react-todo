import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../stores/todo';
import {
  Button,
  TextField,
  InputLabel,
  Input,
  InputAdornment,
  FormControl,
  IconButton,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function AddField() {
  const dispatch = useDispatch();

  const [inputTitle, setInputTitle] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(inputTitle));
    setInputTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="input-with-icon-adornment">
            ToDoを入力
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            type="input"
            value={inputTitle}
            onChange={handleInputChange}
            endAdornment={
              <IconButton type="submit" disabled={inputTitle === ''}>
                <AddCircleIcon />
              </IconButton>
            }
          />
        </FormControl>
      </form>
    </div>
  );
}
