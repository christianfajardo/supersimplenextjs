'use client';

import { FetchUserAttributesOutput } from "aws-amplify/auth";
import { createContext, useContext, useState } from "react";

type UserContext = {
  user: FetchUserAttributesOutput | undefined,
  setUser: (newUser: FetchUserAttributesOutput | undefined) => void,
}

export const CurrentUserContext = createContext<UserContext | undefined>(undefined);

type Props = {
  children: React.ReactNode
};

export const CurrentUserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<FetchUserAttributesOutput | undefined>({});
  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};