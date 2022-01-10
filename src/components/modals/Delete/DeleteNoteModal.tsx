import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useHistory } from 'react-router-dom';

import { deleteNote } from '../../../data-processing/deleteNote';

import { Note } from '../../../typedefs/Note';

interface Props {
  isOpen: boolean,
  changeModalRenderStatus: (par: boolean) => void,
  noteForDeleteId: number,
  listRerenderQuery: (par: Note[] | null) => void,
}

export const DeleteNoteModal: React.FC<Props> = ({
  isOpen,
  changeModalRenderStatus,
  noteForDeleteId,
  listRerenderQuery,
}) => {
  const history = useHistory();

  const handleClickOnYesButton = () => {
    deleteNote(
      noteForDeleteId,
      changeModalRenderStatus,
      listRerenderQuery,
    );

    history.push('/');
  };

  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      shouldCloseOnEsc
      onRequestClose={() => {
        changeModalRenderStatus(false);
      }}
    >
      <h2>Are you sure want to delete this note?</h2>
      <button
        type="button"
        onClick={handleClickOnYesButton}
      >
        Yes
      </button>
      <button
        type="button"
        onClick={() => changeModalRenderStatus(false)}
      >
        No
      </button>
    </ReactModal>
  );
};
