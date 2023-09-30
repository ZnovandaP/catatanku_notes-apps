import * as React from 'react';
// * components
import InputTitle from '../input/InputTitle';
import InputNote from '../input/InputNote';
import ButtonSubmit from '../button/ButtonSubmit';
// * utils
import triggerToast from '../../utils/triggerToast';

export default function BodyAddNote({ setNotes, setModalIsOpen, toastRef }) {
  const [formAddNote, setFormAddNote] = React.useState({
    id: +new Date(),
    title: '',
    body: '',
    createdAt: new Date(),
    archived: false,
  });

  const handleSubmitAddNote = (e) => {
    e.preventDefault();
    setNotes((prev) => [...prev, formAddNote]);

    toastRef.current.firstChild.children[1].innerText = `Catatan "${formAddNote?.title}" ditambahkan`;
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
        <ButtonSubmit text="Tambahkan Catatan" />
      </form>
    </section>
  );
}
