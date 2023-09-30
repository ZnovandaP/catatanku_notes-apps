import * as React from 'react';

export default function ButtonSubmit({ text, onClick }) {
  return (
    <button
      type="submit"
      className="min-h-[44px] min-w-[44px] w-full sm:w-[60%] md:w-[40%] bg-primary/80 rounded-tl-2xl rounded-br-2xl text-textMedium font-medium ring-1 ring-textBold self-end hover:bg-primary/60 transition-all duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
