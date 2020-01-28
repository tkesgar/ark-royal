import React from "react";
import { Card } from "react-bootstrap";
import "./style.scss";

const INITIAL_VALUE = 7 / 22;

interface LevelProgressCardProps {
  onChange: (value: number) => void;
}

export default function LevelProgressCard(
  props: LevelProgressCardProps
): React.ReactElement {
  const { onChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Number(event.target.value);
    onChange(value);
  };

  return (
    <Card className="LevelProgressCard">
      <Card.Body>
        <Card.Title as="h6">Level progress</Card.Title>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          defaultValue={INITIAL_VALUE}
          onChange={handleChange}
        />
      </Card.Body>
    </Card>
  );
}
