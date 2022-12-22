import useTimout from "../../hooks/useTimout";

export default {
  title: "Hook/useTimout",
};

export const Default = () => {
  const clear = useTimout(() => {
    alert("실행");
  }, 3000);

  return (
    <>
      <div>useTimout</div>
      <button onClick={clear}>stop</button>
    </>
  );
};
