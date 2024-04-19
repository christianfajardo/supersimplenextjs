import * as React from 'react';

export const Footer = () => {
  return (
    <div className="flex flex-col justify-left align- bg-black text-slate-200 font-thin text-sm p-4 ">
      <div className="flex flex-col sm:flex-row gap-5 md:gap-24">
        <div className="flex flex-col">
          <span className="font-normal">About</span>
          <div className="flex flex-col pl-4 pt-1 space-y-1">
            <span>Christian Fajardo</span>
            <span>Email: ulchris@yahoo.com</span>
            <span>Phone: (925)548-7153</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-normal">Tech Stack</span>
          <div className="flex flex-col pl-4 pt-1 space-y-1">
            <span>Next.js</span>
            <span>React</span>
            <span>TailwindCss</span>
            <span>Material UI</span>
            <span>AWS Cognito (Authentication)</span>
            <span>Json Server (local file server)</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-normal">Features</span>
          <div className="flex flex-col pl-4 pt-1 space-y-1">
            <span>Basic Employee CRUD via REST</span>
            <span>Responsive Mobile UX</span>
            <span>Basic SignUp / SignIn</span>
            <span>Basic REST Calls</span>
            <span>MUI Custom Theme</span>
            <span>TailwindCSS Overrides</span>
          </div>
        </div>
      </div>
    </div>
  );
};