"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
) {
  const [storedValue, setStoredValueState] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(
        key,
        JSON.stringify(storedValue)
      );
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  function setValue(
    value: T | ((prev: T) => T)
  ) {
    setStoredValueState((prev) =>
      typeof value === "function"
        ? (value as (prev: T) => T)(prev)
        : value
    );
  }

  return {
    value: storedValue,
    setValue,
  };
}