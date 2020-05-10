import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../stores/todo';

export default function AddField() {
  const dispatch = useDispatch();

  const [inputTitle, setInputTitle] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addTodo(inputTitle));
    setInputTitle('');
  };

  return (
    <div>
      <input type="text" value={inputTitle} onChange={handleInputChange} />
      <button onClick={handleSubmit} disabled={inputTitle === ''}>
        追加
      </button>
    </div>
  );
}
