import Box from "./components/Box";
import Box2 from "./components/Box/Box2";
import { css } from "@emotion/react";

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
  return (
    <div>
      <SomeComponent />
      <Box bgColor={"red"} />
      <Box2 />
      <div css={{ width: 100, height: 100, backgroundColor: "black" }} />
    </div>
  );
}

export default App;
