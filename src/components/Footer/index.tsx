import React from "react";
import { Container } from "react-bootstrap";

export default function MainNavbar(): React.ReactElement {
  return (
    <footer className="border-top border-light mt-5 px-1 py-5">
      <Container>
        Original mock UI assets credits to{" "}
        <a
          href="https://www.facebook.com/gymnastiar.romadhon/posts/2661226957329992"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adam Miftakhul Arzaq
        </a>
        .
      </Container>
    </footer>
  );
}
