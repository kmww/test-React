import { useState } from "react";
import Counter from "./components/Counter";
import UseRef from "./components/UseRef";
import AutoCounter from "./components/UseRef/AutoCounter";

function App() {
  const [totalCount, setTotalCount] = useState(0);

  return (
    <div>
      TotalCount: {totalCount}
      <Counter
        onIncrease={() => setTotalCount(totalCount + 1)}
        onDecrease={() => setTotalCount(totalCount - 1)}
      />
      <Counter
        onIncrease={() => setTotalCount(totalCount + 1)}
        onDecrease={() => setTotalCount(totalCount - 1)}
      />
      <Counter
        onIncrease={() => setTotalCount(totalCount + 1)}
        onDecrease={() => setTotalCount(totalCount - 1)}
      />
      <UseRef />
      <AutoCounter />
    </div>
  );
}

export default App;
