import * as React from 'react';
import { MdNoteAdd } from 'react-icons/md';

export default function ButtonAddNote({ setModalIsOpen, modalIsOpen }) {
  const handleClickOpenModal = () => {
    setModalIsOpen({
      ...modalIsOpen,
      isOpen: true,
      type: 'addNote',
    });
  };
  return (
    <button
      type="button"
      onClick={handleClickOpenModal}
      name="Button Add Note"
      title="Tambahkan Catatan"
      className="min-w-[44px] z-10 min-h-[44px] fixed bottom-8 right-8 flex justify-center items-center bg-primary p-4 rounded-full hover:opacity-75"
    >
      <span className="text-textBold text-3xl">
        <MdNoteAdd />
      </span>
    </button>
  );
}
