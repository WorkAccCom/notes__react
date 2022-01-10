import React, { useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';

import { DeleteButton } from '../buttons/Delete';

import { Note } from '../../typedefs/Note';

import './Notes.scss';

interface Props {
  notes: Note[] | null,
  listRerenderQuery: (par: Note[] | null) => void,
  passNoteForEdit: (par: Note | null) => void,
}

export const Notes: React.FC<Props> = ({
  notes,
  listRerenderQuery,
  passNoteForEdit,
}) => {
  const history = useHistory();

  const editeNote = (note: Note) => {
    passNoteForEdit(note);
    history.push('/edit');
  };

  return (
    <ul className="Notes">
      {notes && notes.map((note) => (
        <li className="Notes__note" key={note.id}>
          
          <h3 className="Notes__note-title">
            {note.title}
          </h3>
          <p className="Notes__note-text">
            {note.text}
          </p>

          <button
            type="button"
            onClick={() => {
              editeNote(note);
            }}
            className="Notes__note-edit"
          >
            Edit
          </button>

          <DeleteButton
            id={note.id}
            listRerenderQuery={listRerenderQuery}
          />
        </li>
      ))}
    </ul>
  );
};
