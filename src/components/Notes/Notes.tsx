import React from 'react';
import { Note } from '../../typedefs/Note';
import './Notes.scss';

interface Props {
  notes: Note[],
}

export const Notes: React.FC<Props> = ({ notes }) => (
  <ul className="Notes">
    {notes.map((note) => (
      <li className="Notes__note" key={note.id}>
        <h3 className="Notes__note-title">
          {note.title}
        </h3>
        <p className="Notes__note-text">
          {note.text}
        </p>
        <button
          type="button"
          onClick={() => {}}
          className="Notes__note-edit"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => {}}
          className="Notes__note-delete"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
