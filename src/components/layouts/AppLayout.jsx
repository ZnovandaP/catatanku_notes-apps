import * as React from 'react';
// * layouts
import NavbarLayout from './NavbarLayout';
// * components
import BackgroundBlurDecoration from '../decoration/BackgroundBlurDecoration';

export default function AppLayout({ children }) {
  return (
    <>
      <NavbarLayout />
      <main className="relative bg-background text-sm font-common min-h-screen">
        {children}
        <BackgroundBlurDecoration />
      </main>
    </>
  );
}
