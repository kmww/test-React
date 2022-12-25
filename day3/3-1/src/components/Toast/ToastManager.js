import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";

const ToastManager = () => {
  const [toasts, setToasts] = useState([]);

  const createToast = useCallback((message, duration) => {
    const newToast = {
      id: v4(),
      message,
      duration,
    };
    setToasts((oldToast) => [...oldToast, newToast]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((oldToast) => oldToast.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    bind(createToast);
  }, [bind, createToast]);

  return (
    <div>
      {toasts.map(({ id, message, duration }) => (
        <ToastItem
          id={id}
          message={message}
          duration={duration}
          key={id}
          onDone={() => removeToast(id)}
        />
      ))}
    </div>
  );
};

export default ToastManager;
