import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../stores/todo';
import { Button } from '@material-ui/core';

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
        <input type="text" value={inputTitle} onChange={handleInputChange} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={inputTitle === ''}
        >
          追加
        </Button>
      </form>
    </div>
  );
}
