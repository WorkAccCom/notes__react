import React from 'react';
import { useHistory } from 'react-router-dom';

import classNames from 'classnames';

import { DeleteButton } from '../buttons/Delete';

import { Note } from '../../typedefs/Note';

import './Notes.scss';

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
    <ul className="Notes section">
      {notes && notes.map((note) => (
        <li className="Notes__note block card" key={note.id}>

          <div className="card-content">
            <h3
              // className="Notes__note-title card-header card-header-title"
              className={classNames(
                'title',
                'is-4',
              )}
            >
              {note.title}
            </h3>
            <p
              className={classNames(
                'content',
              )}
            >
              {note.text}
            </p>
          </div>

          <div className={classNames(
            'Notes__buttons',
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
                'Notes__note-edit',
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
