import Box from "./components/Box";
import Box2 from "./components/Box/Box2";
import { css } from "@emotion/react";
import ShowSum from "./components/UseMemo/ShowSum";
import { useState } from "react";
import Box3 from "./components/ReactMemo/Box3";

const style = css`
  color: hotpink;
`;
const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

function App() {
  const [label, setLabel] = useState("Result");
  const [count, setCount] = useState(0);

  return (
    <div>
      <SomeComponent />
      <Box bgColor={"red"} />
      <Box2 />
      <div css={{ width: 100, height: 100, backgroundColor: "black" }} />
      {/* useMemo */}
      <button onClick={() => setLabel(label + ":")}>Change Label</button>
      <ShowSum label={label} n={1000000000} />
      <br />
      {/* React.memo */}
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <Box3 />
    </div>
  );
}

export default App;
