// listing кода к презентации на тему "Работа с формами в React"
// пример использования useRef для хранения значения, которое не вызывает повторный рендеринг компонента при изменении
// useRef позволяет хранить значение, которое не вызывает повторный рендеринг компонента при изменении

import { useEffect, useRef, useState } from "react";

export const RefExample = () => {
  const [count, setCount] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const ref = useRef(0);
  const fakeRef = { current: 0 };

  console.log("component renders");
  console.log("reactRef:", ref);
  console.log("fakeRef:", fakeRef);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);

    ref.current = ref.current + 1;
    fakeRef.current = fakeRef.current + 1;
    console.log("fakeRef value:", fakeRef.current);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
