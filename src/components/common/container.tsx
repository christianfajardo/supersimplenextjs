import * as React from "react";
type Props = {
  children: React.ReactNode;
};
export const Container = ({ children }: Props) => {
  return (
    <div className="flex justify-center max-w-[1400px] w-screen">
      {children}
    </div>
  );
};
