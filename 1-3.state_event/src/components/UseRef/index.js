import { useRef } from "react";
import Input from "./Input";

function UseRef() {
  const inputRef = useRef();

  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}

export default UseRef;
