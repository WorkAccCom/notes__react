import React from 'react';
import { useHistory } from 'react-router-dom';

import classNames from 'classnames';

import { DeleteButton } from '../buttons/Delete';

import { Note } from '../../typedefs/Note';

interface Props {
  notes: Note[] | null,
  listReRenderQuery: (par: Note[] | null) => void,
  passNoteForEdit: (par: Note | null) => void,
}

export const Notes: React.FC<Props> = ({
  notes,
  listReRenderQuery,
  passNoteForEdit,
}) => {
  const history = useHistory();

  const editeNote = (note: Note) => {
    passNoteForEdit(note);
    history.push('/edit');
  };

  return (
    <ul className="section">
      {notes && notes.map((note) => (
        <li className="block card" key={note.id}>

          <div className="card-content">
            <h3
              className={classNames(
                'title',
                'is-4',
              )}
            >
              {note.title}
            </h3>
            <p className="content">
              {note.text}
            </p>
          </div>

          <div className={classNames(
            'buttons',
            'are-small',
            'box',
          )}
          >
            <button
              type="button"
              onClick={() => {
                editeNote(note);
              }}
              className={classNames(
                'button',
                'is-light',
                'is-warning',
                'is-outlined',
              )}
            >
              Edit
            </button>

            <DeleteButton
              id={note.id}
              listReRenderQuery={listReRenderQuery}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
