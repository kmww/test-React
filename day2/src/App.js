import Box from "./components/Box";
import Box2 from "./components/Box/Box2";
import { css } from "@emotion/react";
import ShowSum from "./components/UseMemo/ShowSum";
import { useCallback, useState } from "react";
import Box3 from "./components/ReactMemo/Box3";
import Checkbox from "./components/UseCallback/Checkbox";

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
  const [foodOn, setFoodOn] = useState(false);
  const [clothesOn, setClothesOn] = useState(false);
  const [shelterOn, setShelterOn] = useState(false);

  const foodChange = useCallback((e) => setFoodOn(e.target.checked), []);
  const clothesChange = useCallback((e) => setClothesOn(e.target.checked), []);
  const shelterChange = useCallback((e) => setShelterOn(e.target.checked), []);

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
      {/* UseCallback */}
      <Checkbox label="Food" on={foodOn} onChange={foodChange} />
      <Checkbox label="Clothes" on={clothesOn} onChange={clothesChange} />
      <Checkbox label="Shelter" on={shelterOn} onChange={shelterChange} />
    </div>
  );
}

export default App;
