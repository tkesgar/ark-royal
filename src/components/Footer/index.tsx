import React from "react";
import { Container } from "react-bootstrap";

export default function MainNavbar(): React.ReactElement {
  return (
    <footer className="border-top border-light mt-5 px-1 py-5">
      <Container>
        Created by{" "}
        <a href="https://tkesgar.com" target="_blank" rel="noopener noreferrer">
          Ted Kesgar
        </a>
        .
        <br />
        Credits to{" "}
        <a
          href="https://www.facebook.com/gymnastiar.romadhon/posts/2661226957329992"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adam Miftakhul Arzaq
        </a>{" "}
        for the original mock UI assets PSD.
      </Container>
    </footer>
  );
}
