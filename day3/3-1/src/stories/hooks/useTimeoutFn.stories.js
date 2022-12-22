import useTimeoutFn from "../../hooks/useTimeoutFn";
export default {
  title: "Hook/useTimeoutFn",
};

export const Default = () => {
  const [run, clear] = useTimeoutFn(() => {
    alert("실행");
  }, 3000);

  return (
    <>
      <div>useTimeoutFn</div>
      <button onClick={run}>start in 3s</button>
      <button onClick={clear}>stop!</button>
    </>
  );
};
