import React, { useState } from "react";
import { Container, CardDeck } from "react-bootstrap";
import Canvas from "../Canvas";
import MainNavbar from "../MainNavbar";
import LevelProgressCard from "../LevelProgressCard";
import CharaImageCard, { CharaImageInfo } from "../CharaImageCard";
import Footer from "../Footer";

const INITIAL_PROGRESS = 7 / 22;

const App: React.FC = () => {
  const [progress, setProgress] = useState(INITIAL_PROGRESS);
  const [charaImage, setCharaImage] = useState<CharaImageInfo | null>(null);

  return (
    <div className="App">
      <MainNavbar />

      <div className="mb-5">
        <Canvas progress={progress} charaImage={charaImage} />
      </div>

      <Container fluid>
        <CardDeck>
          <LevelProgressCard onChange={(value): void => setProgress(value)} />
          <CharaImageCard onChange={(value): void => setCharaImage(value)} />
        </CardDeck>
      </Container>

      <Footer />
    </div>
  );
};

export default App;
