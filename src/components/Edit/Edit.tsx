import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { addNoteToLocalStorage } from '../../data-processing/addNoteToLocalStorage';
import { editNoteInLocalStorage } from '../../data-processing/editNoteInLocalStorage';
import { getNotesFromLocalStorage } from '../../data-processing/getNotesFromLocalStorage';

import { Note } from '../../typedefs/Note';

interface Props {
  listRerenderQuery: (par: Note[] | null) => void,
  chosenNoteForEdit: Note | null,
  cleanUpNoteForEdit: (par: Note | null) => void,
}

export const Edit: React.FC<Props> = ({
  listRerenderQuery,
  chosenNoteForEdit,
  cleanUpNoteForEdit,
}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (chosenNoteForEdit?.title) {
      setTitle(chosenNoteForEdit.title);
    }

    if (chosenNoteForEdit?.text) {
      setText(chosenNoteForEdit.text);
    }
  }, []);

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
  };

  const saveNote = (event: React.FormEvent) => {
    event.preventDefault();

    if (chosenNoteForEdit) {
      editNoteInLocalStorage(
        chosenNoteForEdit.id,
        title,
        text,
      );
      setTitle('');
      setText('');
      cleanUpNoteForEdit(null);
    } else {
      addNoteToLocalStorage(title, text);
    }

    listRerenderQuery(getNotesFromLocalStorage());
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
        disabled={!title}
      >
        Save
      </button>
    </form> 
  );
};
