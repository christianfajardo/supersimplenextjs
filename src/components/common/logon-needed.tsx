import Link from "next/link";
import { Frame } from "./frames";
import { Container } from "./container";

export const LoginNeeded = () => {
  return (
    <Container>
      <Frame>
        <div className="flex flex-col items-center">
          <h2>You need to sign in to access employee list.</h2>
          <span>
            Click &nbsp;
            <Link href={"/"}>here</Link>
            &nbsp; to sign in.
          </span>
        </div>
      </Frame>
    </Container>
  );
};
