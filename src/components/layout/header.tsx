"use client";
import * as React from "react";
import Link from "next/link";
import { CurrentUserContext } from "@/internal/user-context";
import { SignedInMenu } from "../user/menu";
import { BurgerContextMenu } from "../main-menu-icon/context-menu";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { MdDeveloperMode } from "react-icons/md";

export const Header = () => {
  const userContext = React.useContext(CurrentUserContext);

  return (
    <div className="flex justify-between items-center bg-slate-800 px-2 text-slate-200">
      <div className="inline-flex items-center">
        <Link
          href="/"
          className="no-underline text-slate-400 hover: hover:text-white"
        >
          <div className="text-slate-300 no-underline flex items-center">
            <MdDeveloperMode className="h-6 w-6 text-slate-200" />
            <h2 className="my-2 pr-2">Super Simple App</h2>
          </div>
        </Link>
      </div>
      <div className="flex gap-4 cursor-pointer">
        <div className="hidden sm:hidden md:flex items-end gap-4 font text-slate-300">
          <Link
            className="no-underline text-slate-400 hover: hover:text-white"
            href="/"
          >
            Home
          </Link>
          {userContext?.user && <SignedInMenu />}
        </div>
        <div className="md:hidden">
          <BurgerContextMenu />
        </div>
      </div>
    </div>
  );
};

export default withAuthenticator(Header);
