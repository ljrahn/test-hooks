import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    document.createElement("div");
    fetch("http://localhost/api");
    setCount((x) => x + 1);
  };
  return { count, increment };
}
