import useTimoutFn from "../../hooks/useTimoutFn";
export default {
  title: "Hook/useTimoutFn",
};

export const Default = () => {
  const [run, clear] = useTimoutFn(() => {
    alert("실행");
  }, 3000);

  return (
    <>
      <div>useTimoutFn</div>
      <button onClick={run}>start in 3s</button>
      <button onClick={clear}>stop!</button>
    </>
  );
};
