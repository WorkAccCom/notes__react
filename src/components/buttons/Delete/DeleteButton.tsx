import React, { useState } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

import { ConfirmationModal } from '../../modals/Confirmation';

import { deleteNote } from '../../../data-processing/deleteNote';
import { Note } from '../../../typedefs/Note';

interface Props {
  id: number | null,
  listReRenderQuery: (par: Note[] | null) => void,
  cleanUpNoteForEdit?: (par: Note | null) => void,
}

export const DeleteButton: React.FC<Props> = ({
  id,
  listReRenderQuery,
  cleanUpNoteForEdit,
}) => {
  const [ConfirmationModalRendered, setConfirmationModalRendered] = useState(false);
  const [noteForDeleteId, setNoteForDeleteId] = useState(-1);

  const history = useHistory();

  const askForNoteDelete = (noteId: number | null) => {
    if (noteId || noteId === 0) {
      setNoteForDeleteId(noteId);
      setConfirmationModalRendered(true);
    }
  };

  return (
    <>
      <button
        type="button"
        name="delete"
        onClick={() => {
          askForNoteDelete(id);
        }}
        className={classNames(
          'Notes__note-delete',
          'button',
          'is-danger',
          { 'is-light': history.location.pathname !== '/edit' },
          { 'is-outlined': history.location.pathname !== '/edit' },
          { 'is-medium': history.location.pathname === '/edit' },
        )}
      >
        Delete
      </button>
      <ConfirmationModal
        isOpen={ConfirmationModalRendered}
        changeModalRenderStatus={setConfirmationModalRendered}
        buttonName="delete"
        functionOnConfirmation={deleteNote}
        noteForDeleteId={noteForDeleteId}
        listReRenderQuery={listReRenderQuery}
        cleanUpNoteForEdit={cleanUpNoteForEdit}
      />
    </>
  );
};
