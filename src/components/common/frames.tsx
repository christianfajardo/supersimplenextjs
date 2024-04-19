import * as React from 'react';
type Props = {
  children: React.ReactNode;
};
export const Frame = ({ children } : Props) => {
  return (
    <div className="flex justify-center items-start bg-slate-100 text-slate-900 border rounded-lg shadow-slate-600 shadow-md p-4 m-4 w-[100%] overflow-auto">
      {children}
    </div>
  );
};