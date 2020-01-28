import React from "react";
import "./style.scss";
import day from "dayjs";
import ContentEditable from "../ContentEditable";
import { CharaImageInfo } from "../CharaImageCard";

const RADIUS = 50.0;
const STROKE_WIDTH = 3;
const CORRECTION = 0.878;

export default function Canvas({
  progress = 1.0,
  charaImage = null
}: {
  progress: number;
  charaImage: CharaImageInfo | null;
}): React.ReactElement {
  const circ = 2.0 * RADIUS * Math.PI;
  const offset = (1.0 - progress * CORRECTION) * circ;

  const datetime = day().format("YYYY/MM/DD HH:mm");

  return (
    <div className="Canvas_container">
      <div className="Canvas_inner">
        <div className="Canvas">
          <div className="Canvas_shadow-top" />
          <div className="Canvas_options" />
          <div className="Canvas_doctor" />
          <div className="Canvas_button" />

          {charaImage && charaImage.data
            ? ((): JSX.Element => {
                const charaWidth =
                  charaImage.size * charaImage.data.img.naturalWidth;
                const charaHeight =
                  charaImage.size * charaImage.data.img.naturalHeight;

                return (
                  <div
                    className="Canvas_chara"
                    style={{
                      backgroundImage: `url(${charaImage.data.url})`,
                      left: `${charaImage.left * 1634}px`,
                      top: `${charaImage.top * 968}px`,
                      width: `${charaWidth}px`,
                      height: `${charaHeight}px`
                    }}
                  />
                );
              })()
            : null}

          <div className="Canvas_reverse" />
          <div className="Canvas_user-info">
            <ContentEditable
              className="Canvas_user-info-level"
              initialValue="69"
            />

            {/* https://css-tricks.com/building-progress-ring-quickly/ */}
            <svg
              className="Canvas_user-info-level-progress"
              height="100"
              width="100"
            >
              <circle
                className="Canvas_user-info-level-progress-circle"
                stroke="#ffdf32"
                strokeWidth={STROKE_WIDTH}
                fill="transparent"
                r={RADIUS - STROKE_WIDTH * 2}
                cx={RADIUS}
                cy={RADIUS}
                style={{
                  strokeDasharray: `${circ} ${circ}`,
                  strokeDashoffset: `${offset}`
                }}
              />
            </svg>

            <ContentEditable
              initialValue="nonani"
              className="Canvas_user-info-name"
            />

            <ContentEditable
              initialValue="ID: 288369"
              className="Canvas_user-info-id"
            />
          </div>
          <div className="Canvas_left-panel">
            <div className="Canvas_voice">
              <ContentEditable
                initialValue="Ark Royal, ready for inspection!"
                className="text"
              />
            </div>
            <div className="Canvas_banners" />
          </div>
          <div className="Canvas_right-panel">
            <div className="Canvas_combat">
              <ContentEditable initialValue="120" className="Canvas_sanity" />
              <ContentEditable
                initialValue="4-10 Burning Run"
                className="Canvas_current-mission"
              />
            </div>
            <div className="Canvas_right-buttons" />
            <div className="Canvas_prices">
              <ContentEditable
                initialValue={datetime}
                className="Canvas_prices-datetime"
              />
              <ContentEditable
                initialValue="128080"
                className="Canvas_prices-blue"
              />
              <ContentEditable
                initialValue="7620"
                className="Canvas_prices-red"
              />
              <ContentEditable
                initialValue="102"
                className="Canvas_prices-yellow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
