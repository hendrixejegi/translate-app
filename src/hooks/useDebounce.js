import { useState, useEffect } from "react";

const useDebounce = (value, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return function () {
      clearTimeout(timerID);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
