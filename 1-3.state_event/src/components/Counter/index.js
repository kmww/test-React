import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Counter({ onIncrease, onDecrease }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`clicked ${count} times`);
  }, [count]); // count 변화 감지

  useEffect(() => {
    console.log("Component Loaded");
    const handleScroll = () => {
      console.log(window.scrollY);
    };

    document.addEventListener("scroll", handleScroll); // 전역적인 이벤트를 사용할때
    return () => document.removeEventListener("scroll", handleScroll); // return으로 반환한 함수는 컴포넌트가 제거 될때 실행
  }, []); // 컴포넌트가 처음 로드될 때 실행

  const handleIncrease = () => {
    setCount(count + 1);
    if (onIncrease) {
      onIncrease(count + 1);
    }
  };

  const handleDecrease = () => {
    setCount(count - 1);
    if (onDecrease) {
      onDecrease(count - 1);
    }
  };

  return (
    <div>
      <span style={{ fontSize: 40 }}>{count}</span>
      <br />
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
}

Counter.propTypes = {
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
};

export default Counter;
