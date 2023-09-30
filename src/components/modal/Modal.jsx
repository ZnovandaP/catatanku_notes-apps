import * as React from 'react';
// * icons
import { HiXMark } from 'react-icons/hi2';

export default function Modal({
  children, notes, setModalIsOpen, modalIsOpen,
}) {
  const currentNote = notes?.find((note) => note?.id === modalIsOpen?.id);
  const modalRef = React.useRef(null);
  let textModalHead;

  if (modalIsOpen.type === 'addNote') {
    textModalHead = 'Menambahkan Catatan Baru';
  } else if (modalIsOpen.type === 'editNote') {
    textModalHead = `Mengubah Catatan "${currentNote?.title}"`;
  } else {
    textModalHead = `Detail Catatan "${currentNote?.title}"`;
  }

  React.useEffect(() => {
    const modalDOM = modalRef.current;
    if (modalIsOpen.isOpen) {
      modalDOM.classList.replace('hidden', 'flex');
      document.body.classList.add('overflow-y-hidden');
      setTimeout(() => {
        modalDOM.classList.replace('opacity-0', 'opacity-100');
      }, 400);
    } else {
      modalDOM.classList.replace('opacity-100', 'opacity-0');
      document.body.classList.remove('overflow-y-hidden');
      setTimeout(() => {
        modalDOM.classList.replace('flex', 'hidden');
      }, 400);
    }
  }, [modalIsOpen]);

  const handleCloseModal = () => {
    setModalIsOpen({
      isOpen: false,
      type: null,
      id: null,
    });
  };

  return (
    <OverlayModal ref={modalRef}>
      <Popup>
        <Popup.Head text={textModalHead || 'Menambahkan Catatan'} onClose={handleCloseModal} />
        <Popup.Body>
          {children}
        </Popup.Body>
        <Popup.Foot />
      </Popup>
    </OverlayModal>
  );
}

const OverlayModal = React.forwardRef(({ children }, ref) => (
  <div
    ref={ref}
    className="hidden opacity-0 fixed bottom-0 top-0 left-0 right-0 justify-center items-center bg-neutral-900/70 z-10 transition-all duration-300"
  >
    {children}
  </div>
));

export function Popup({ children }) {
  return (
    <div className="modal bg-neutral-800 w-[90%] h-[92%] rounded-lg xl:w-[80%] xl:h-[85%] dark:bg-dark-secondary">
      {children}
    </div>
  );
}

function Head({ onClose, text }) {
  return (
    <section className="flex justify-between items-center h-[12%] px-4 sm:px-8 border-b border-primary/60">
      <h2
        className="text-center text-textMedium tracking-wider font-bold md:text-base"
      >
        {text}
      </h2>
      <button
        className="text-3xl text-neutral-600 p-1 rounded-full hover:opacity-70 focus:outline-dashed  focus:outline-neutral-500 dark:focus:outline-neutral-100 dark:text-neutral-50"
        type="button"
        onClick={onClose}
      >
        <HiXMark />
      </button>
    </section>
  );
}

function Body({ children }) {
  return (
    <section className="h-[76%] overflow-y-auto">
      {children}
    </section>
  );
}

function Foot() {
  return (
    <section className=" flex justify-center items-center h-[12%] border-t border-primary/60">
      <h2
        className="text-center font-script text-2xl text-primary tracking-wider font-bold "
      >
        Catatanku
      </h2>
    </section>
  );
}

Popup.Head = Head;
Popup.Body = Body;
Popup.Foot = Foot;
