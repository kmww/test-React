import { useState } from "react";
import Board from "./components/Board";

function App() {
  const [visible, setVisible] = useState(false);

  const articles = [
    {
      id: 1,
      title: "Hello",
      author: "leo",
    },
    {
      id: 2,
      title: "Hi",
      author: "leon",
    },
    {
      id: 3,
      title: "Bye",
      author: "loe",
    },
  ];

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && (
        <h1>논리곱 연산자를 통해 쉽게 JSX 렌더링 여부를 결정할 수 있다.</h1>
      )}

      {visible ? (
        <Board articles={articles} />
      ) : (
        <p>게시판을 보려면 Toggle 버튼을 클릭해주세요.</p>
      )}
    </div>
  );
}

export default App;
