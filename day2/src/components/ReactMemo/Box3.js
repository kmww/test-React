import React from "react";

// 부모 컴포넌트의 상태가 변경되어도 리렌더링 하지않음
const Box3 = React.memo(() => {
  console.log("Render Box3!");
  const style = {
    width: 100,
    height: 100,
    backgroundColor: "red",
  };
  return <div style={style} />;
});

export default Box3;
