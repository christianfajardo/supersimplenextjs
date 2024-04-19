"use client";
import Link from "next/link";
import { BurgerContextMenu } from "./context-menu";

export const SignedInMenu = () => {
  return (
    <>
      <Link
        className="no-underline text-slate-400 hover: hover:text-white"
        href="/employees"
      >
        Employees
      </Link>
      <BurgerContextMenu />
    </>
  );
};
