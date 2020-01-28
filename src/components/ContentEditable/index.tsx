import React, { useRef, useEffect } from "react";

interface ContentEditableProps {
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  value?: string;
  onChange?: (value: string) => void;
}

export default function ContentEditable(
  props: ContentEditableProps
): React.ReactElement {
  const { value = "", onChange, ...restProps } = props;

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current === null) {
      return;
    }

    divRef.current.innerText = value;
  });

  let handleInput;
  if (onChange) {
    handleInput = (e: React.FormEvent<HTMLDivElement>): void => {
      onChange(e.currentTarget.innerText);
    };
  }

  return (
    <div ref={divRef} contentEditable onInput={handleInput} {...restProps} />
  );
}
