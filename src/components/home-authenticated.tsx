"use client";

import config from "@/infra/aws/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Container } from "./common/container";
import { Frame } from "./common/frames";
import { fetchUserAttributes } from "@aws-amplify/auth";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { CurrentUserContext } from "@/internal/user-context";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(config);

export function Home() {
  const userContext = useContext(CurrentUserContext);

  useEffect(() => {
    fetchUserAttributes().then((user) => {
      userContext?.setUser(user);
    });
  }, []);

  return (
    <Container>
      <Frame>
        <div className="flex flex-col items-center">
          <h2>Welcome back to Super Simple NextJS App,</h2>
          <h1 className="w-[100%] text-center">
            {userContext?.user?.given_name}!
          </h1>
          <h4>
            This is your Minimalist sample Next.js App.
          </h4>
          <span>
            Click &nbsp;
            <Link href={"/employees"}>here</Link>
            &nbsp; to see employee list.
          </span>
        </div>
      </Frame>
    </Container>
  );
}

export default withAuthenticator(Home);
