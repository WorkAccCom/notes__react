import React, { useState } from 'react';
import { ConfirmationModal } from '../../modals/Confirmation';
import { deleteNote } from '../../../data-processing/deleteNote';
import { Note } from '../../../typedefs/Note';

interface Props {
  id: number | null,
  listRerenderQuery: (par: Note[] | null) => void,
}

export const DeleteButton: React.FC<Props> = ({
  id,
  listRerenderQuery,
}) => {
  const [
    ConfirmationModalRendered,
    setConfirmationModalRendered,
  ] = useState(false);
  const [noteForDeleteId, setNoteForDeleteId] = useState(-1);

  const askForNoteDelete = (noteId: number | null) => {
    if (noteId || noteId === 0) {
      setConfirmationModalRendered(true);
      setNoteForDeleteId(noteId);
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
        className="Notes__note-delete"
      >
        Delete
      </button>
      <ConfirmationModal
        isOpen={ConfirmationModalRendered}
        changeModalRenderStatus={setConfirmationModalRendered}
        noteForDeleteId={noteForDeleteId}
        listRerenderQuery={listRerenderQuery}
        buttonName="delete"
        functionOnConfirmation={deleteNote}
      />
    </>
  );
};
