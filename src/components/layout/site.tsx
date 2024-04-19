'use client';
import * as React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type Props = {
  children: React.ReactNode;
};

const Site = ({ children }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="min-h-screen flex flex-col min-w-[280px]">
        <Header />
        <div className="flex flex-col flex-grow ">
          <div className="flex justify-center bg-slate-950/80 text-slate-100 flex-grow">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </LocalizationProvider>
  );
};

export default Site;