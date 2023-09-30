import * as React from 'react';
// * icon
import { BsCheckCircle } from 'react-icons/bs';

const Toast = React.forwardRef(({ text }, ref) => (
  <div
    ref={ref}
    className="fixed -bottom-4 left-1/2 -translate-x-1/2 z-10 hidden justify-center items-center rounded-md bg-neutral-700  p-4 ring-1 ring-primary/60 transition-all duration-300"
  >
    <h2 className="text-textMedium font-medium flex gap-3 justify-center items-center">
      <span className="text-primary text-2xl">
        <BsCheckCircle />
      </span>
      <span>{text ?? 'Berhasil'}</span>
    </h2>
  </div>
));

export default Toast;
