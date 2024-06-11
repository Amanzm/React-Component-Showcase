import { useEffect, useState } from "react";

const useLocalStorage = (key, defValue) => {
  const [value, setValue] = useState(() => {
    const currValue = localStorage.getItem(key);
    return JSON.parse(currValue) || String(defValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
export default useLocalStorage;
