import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { updateLocalStorage } from '../../data-processing/updateLocalStorage';

export const Edit: React.FC = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [redirect, setRedirect] = useState(false);

  const inputChangeHandle = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    switch (event.target.name) {
      case 'title':
        setTitle(event.target.value);
        break;
      case 'text':
        setText(event.target.value);
        break;
      default:
    }

    console.log(event);
  };

  const saveNote = (event: any) => {
    event.preventDefault();
    updateLocalStorage(title, text);
    setRedirect(true);
  };

  return (
    <form
      action=""
      onSubmit={saveNote}
    >
      {redirect && <Redirect to="/" />}

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={inputChangeHandle}
        name="title"
      />
      <textarea
        placeholder="Text"
        value={text}
        onChange={inputChangeHandle}
        name="text"
      />
      <button
        type="submit"
        className="button"
        onSubmit={saveNote}
        disabled={!title || !text}
      >
        Save
      </button>
    </form> 
  );
};
