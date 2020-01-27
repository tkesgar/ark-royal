import React from "react";
import "./style.scss";
import day from "dayjs";

const RADIUS = 50.0;
const STROKE_WIDTH = 3;
const CORRECTION = 0.878;

export default function Canvas({
  progress = 1.0,
  charaBackground = "",
  charaLeft = 100,
  charaTop = 100,
  charaWidth = 100,
  charaHeight = 100
}): React.ReactElement {
  const circ = 2.0 * RADIUS * Math.PI;
  const offset = (1.0 - progress * CORRECTION) * circ;

  const datetime = day().format("YYYY/MM/DD HH:mm");

  return (
    <div className="Canvas">
      <div className="Canvas_shadow-top" />
      <div className="Canvas_options" />
      <div className="Canvas_doctor" />
      <div className="Canvas_button" />
      <div
        className="Canvas_chara"
        style={{
          backgroundImage: `url(${charaBackground})`,
          left: `${charaLeft}px`,
          top: `${charaTop}px`,
          width: `${charaWidth}px`,
          height: `${charaHeight}px`
        }}
      />
      <div className="Canvas_reverse" />
      <div className="Canvas_user-info">
        <div
          className="Canvas_user-info-level"
          contentEditable
          suppressContentEditableWarning={true}
        >
          69
        </div>
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
        <div
          className="Canvas_user-info-name"
          contentEditable
          suppressContentEditableWarning={true}
        >
          nonani
        </div>
        <div
          className="Canvas_user-info-id"
          contentEditable
          suppressContentEditableWarning={true}
        >
          ID: 288369
        </div>
      </div>
      <div className="Canvas_left-panel">
        <div className="Canvas_voice">
          <div
            className="text"
            contentEditable
            suppressContentEditableWarning={true}
          >
            No matter where I go, the war never ends... Deutschland-class
            armored ship number 3, Admiral Graf Spee, reporting for duty.
          </div>
        </div>
        <div className="Canvas_banners" />
      </div>
      <div className="Canvas_right-panel">
        <div className="Canvas_combat">
          <div
            className="Canvas_sanity"
            contentEditable
            suppressContentEditableWarning={true}
          >
            120
          </div>
          <div
            className="Canvas_current-mission"
            contentEditable
            suppressContentEditableWarning={true}
          >
            4-10 Burning Run
          </div>
        </div>
        <div className="Canvas_right-buttons" />
        <div className="Canvas_prices">
          <div
            className="Canvas_prices-datetime"
            contentEditable
            suppressContentEditableWarning={true}
          >
            {datetime}
          </div>
          <div
            className="Canvas_prices-blue"
            contentEditable
            suppressContentEditableWarning={true}
          >
            128080
          </div>
          <div
            className="Canvas_prices-red"
            contentEditable
            suppressContentEditableWarning={true}
          >
            7620
          </div>
          <div
            className="Canvas_prices-yellow"
            contentEditable
            suppressContentEditableWarning={true}
          >
            102
          </div>
        </div>
      </div>
    </div>
  );
}
