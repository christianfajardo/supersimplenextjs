"use client";
import * as React from "react";
import { Container } from "@/components/common/container";
import { Frame } from "@/components/common/frames";
import { EmployeeList } from "@/components/employee/employee-list";
import { CurrentUserContext } from "@/internal/user-context";
import { useContext } from "react";
import { LoginNeeded } from "@/components/common/logon-needed";

const Page = () => {
  const userContext = useContext(CurrentUserContext);
  if (!userContext?.user?.given_name) {
    return <LoginNeeded />;
  }

  return (
    <Container>
      <Frame>
        <EmployeeList />
      </Frame>
    </Container>
  );
};

export default Page;
