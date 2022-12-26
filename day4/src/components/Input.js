import { forwardRef, Fragment, useImperativeHandle, useRef } from "react";

const Input = forwardRef((_, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    clear: () => {
      inputRef.current.value = "";
    },
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <Fragment>
      Input: <input ref={inputRef} />
    </Fragment>
  );
});

export default Input;
