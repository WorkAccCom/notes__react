import React from 'react';
import { Note } from '../../typedefs/Note';

interface Props {
  notes: Note[],
}

export const Notes: React.FC<Props> = ({ notes }) => (
  <ul className="notes">
    {notes.map((note) => (
      <li className="notes__note" key={note.id}>
        {note.title}
        <br />
        {note.text}
      </li>
    ))}
  </ul>
);
