import * as React from 'react';
// * icons
import { SlNotebook } from 'react-icons/sl';
import { BsSuitHeartFill } from 'react-icons/bs';

export default function FooterLayout() {
  return (
    <footer className="bg-neutral-800  flex flex-col items-center gap-8 py-8 border-t border-primary">
      <div className="bg-neutral-950/30 px-6 py-3 rounded-tl-3xl rounded-br-3xl ring-1 ring-primary/60">
        <h2 className="flex gap-3 text-primary font-script font-extrabold text-4xl">
          <span className=" ">
            <SlNotebook />
          </span>
          Catatanku
        </h2>
      </div>

      <span className="w-[80%] md:w-[70%] lg:w-[60%] h-[2px] bg-primary/50" />

      <div className="flex justify-center items-center flex-wrap gap-2 text-textMedium font-medium">
        <h2 className="flex gap-3 items-center text-center">
          Dibuat dengan
          <span className="text-red-600 animate-bounce">
            <BsSuitHeartFill />
          </span>
        </h2>
        <a
          href="http://znovandap-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="text-center underline decoration-wavy decoration-[3px] decoration-primary underline-offset-4 hover:opacity-75"
        >
          Zidane Novanda Putra
        </a>
      </div>
    </footer>
  );
}
