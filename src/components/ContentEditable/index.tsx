import React, { useRef, useEffect } from "react";

interface ContentEditableProps {
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  initialValue?: string;
}

export default function ContentEditable(
  props: ContentEditableProps
): React.ReactElement {
  const { initialValue: value = "", ...restProps } = props;

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current === null) {
      return;
    }

    divRef.current.innerText = value;
  }, [value]);

  return <div ref={divRef} contentEditable {...restProps} />;
}
