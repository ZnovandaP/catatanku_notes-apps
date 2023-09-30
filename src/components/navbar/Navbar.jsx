import * as React from 'react';
// * icons
import { SlNotebook } from 'react-icons/sl';

export default function Navbar() {
  return (
    <nav
      className="h-[4.75rem] flex items-center bg-white/5 pl-8 backdrop-blur-2xl border-b-[1px] md:pl-10 lg:pl-12 xl:pl-14  border-primary"
    >
      <h1 className="flex gap-2 text-primary font-script font-extrabold text-4xl">
        <span className="">
          <SlNotebook />
        </span>
        Catatanku
      </h1>
    </nav>
  );
}
