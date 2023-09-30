import * as React from 'react';
// * components
import InputTitle from '../input/InputTitle';
import InputNote from '../input/InputNote';
import ButtonSubmit from '../button/ButtonSubmit';
// * utils
import triggerToast from '../../utils/triggerToast';

export default function BodyEditNote({
  modalIsOpen, setModalIsOpen, setNotes, notes, toastRef,
}) {
  const currentNote = notes?.find((note) => note?.id === modalIsOpen.id);

  const [formAddNote, setFormAddNote] = React.useState({
    ...currentNote,
    createdAt: new Date(),
  });

  const handleSubmitAddNote = (e) => {
    e.preventDefault();
    setNotes((prev) => [...prev.map((note) => {
      if (note?.id === formAddNote?.id) {
        return {
          ...formAddNote,
        };
      }
      return note;
    })]);

    // * trigger toast
    toastRef.current.firstChild.children[1].innerText = `Catatan "${currentNote?.title}" diubah`;
    triggerToast(toastRef);

    // * close Modal
    setModalIsOpen({
      isOpen: false,
      type: null,
      id: null,
    });
  };

  return (
    <section className="p-6 px-8 md:px-12">
      <form
        autoComplete="off"
        onSubmit={(e) => handleSubmitAddNote(e)}
        className="flex flex-col justify-center  gap-6"
      >
        <InputTitle formAddNote={formAddNote} setFormAddNote={setFormAddNote} />
        <InputNote formAddNote={formAddNote} setFormAddNote={setFormAddNote} />
        <ButtonSubmit text="Edit Catatan" />
      </form>
    </section>
  );
}
