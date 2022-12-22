import { useEffect } from "react";
import useTimoutFn from "./useTimoutFn";

const useTimout = (fn, ms) => {
  const [run, clear] = useTimoutFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  }, [run, clear]);

  return clear;
};

export default useTimout;
