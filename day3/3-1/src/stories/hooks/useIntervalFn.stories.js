import { useState } from "react";
import useIntervalFn from "../../hooks/useIntervalFn";

export default {
  title: "Hook/useIntervalFn",
};

export const Default = () => {
  const [array, setArray] = useState([]);
  const [run, clear] = useIntervalFn(() => {
    setArray([...array, "추가됨--"]);
  }, 1000);

  return (
    <>
      <div>useIntervalFn</div>
      <div>{array}</div>
      <button onClick={run}>1초마다 추가</button>
      <button onClick={clear}>중지</button>
    </>
  );
};
