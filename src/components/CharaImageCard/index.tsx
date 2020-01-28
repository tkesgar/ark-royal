import React, { useState } from "react";
import { Card, Form, Col } from "react-bootstrap";
import "./style.scss";

interface ImageData {
  file: File;
  url: string;
  img: HTMLImageElement;
}

export interface CharaImageInfo {
  data: ImageData | null;
  top: number;
  left: number;
  size: number;
}

interface CharaImageCardProps {
  onChange: (value: CharaImageInfo) => void;
}

export default function CharaImageCard(
  props: CharaImageCardProps
): React.ReactElement {
  const { onChange } = props;

  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [top, setTop] = useState(0.1);
  const [left, setLeft] = useState(0.1);
  const [size, setSize] = useState(0.9);

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];

    if (imageData) {
      URL.revokeObjectURL(imageData.url);
      setImageData(null);
    }

    if (!file) {
      onChange({ data: null, top, left, size });
      return;
    }

    const url = URL.createObjectURL(file);

    const img = new Image();
    img.src = url;

    const data = { url, img, file };
    setImageData(data);
    onChange({ data, top, left, size });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title as="h6">Character</Card.Title>
        <Form>
          <Form.Group controlId="charaImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/png"
              onChange={handleImageChange}
            />

            {imageData ? (
              <img
                src={imageData.url}
                alt={imageData.file.name}
                className="CharaImageCard_preview mt-3"
              />
            ) : null}
          </Form.Group>
          <Form.Row>
            <Col>
              <Form.Group controlId="charaTop">
                <Form.Label>Top</Form.Label>
                <Form.Control
                  type="range"
                  min="-1"
                  max="1"
                  step="0.01"
                  defaultValue="0.1"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    setTop(Number(e.target.value));
                    onChange({ data: imageData, top, left, size });
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="charaLeft">
                <Form.Label>Left</Form.Label>
                <Form.Control
                  type="range"
                  min="-1"
                  max="1"
                  step="0.01"
                  defaultValue="0.1"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    setLeft(Number(e.target.value));
                    onChange({ data: imageData, top, left, size });
                  }}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group controlId="charaSize">
            <Form.Label>Size</Form.Label>
            <Form.Control
              type="number"
              min="0"
              max="10"
              step="0.01"
              defaultValue="1"
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setSize(Number(e.target.value));
                onChange({ data: imageData, top, left, size });
              }}
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
