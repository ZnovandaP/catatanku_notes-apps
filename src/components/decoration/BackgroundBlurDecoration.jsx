import * as React from 'react';
// * utils

export default function BackgroundBlurDecoration() {
  return (
    <div className="animate-move absolute top-[4rem] right-20 z-0  h-full">
      <div
        className="animate-pulse h-60 w-60 bg-gradient-to-r from-primary/60 to-sky-700/60  rounded-full blur-3xl sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-[22rem] xl:w-[22rem]"
      />
    </div>
  );
}
