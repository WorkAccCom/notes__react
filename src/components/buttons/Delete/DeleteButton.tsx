import React, { useState } from 'react';
import { ConfirmationModal } from '../../modals/Confirmation';
import { deleteNote } from '../../../data-processing/deleteNote';
import { Note } from '../../../typedefs/Note';

interface Props {
  id: number | null,
  listRerenderQuery: (par: Note[] | null) => void,
  cleanUpNoteForEdit?: (par: Note | null) => void,
}

export const DeleteButton: React.FC<Props> = ({
  id,
  listRerenderQuery,
  cleanUpNoteForEdit,
}) => {
  const [ConfirmationModalRendered, setConfirmationModalRendered] = useState(false);
  const [noteForDeleteId, setNoteForDeleteId] = useState(-1);

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
        className="Notes__note-delete"
      >
        Delete
      </button>
      <ConfirmationModal
        isOpen={ConfirmationModalRendered}
        changeModalRenderStatus={setConfirmationModalRendered}
        buttonName="delete"
        functionOnConfirmation={deleteNote}
        noteForDeleteId={noteForDeleteId}
        listRerenderQuery={listRerenderQuery}
        cleanUpNoteForEdit={cleanUpNoteForEdit}
      />
    </>
  );
};
