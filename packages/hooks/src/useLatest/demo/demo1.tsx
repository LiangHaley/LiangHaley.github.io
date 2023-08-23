import React, { useState, useEffect } from 'react';
import { useLatest } from 'demo-hooksliang';
export default () => {
  const [count, setCount] = useState(0);
  const latestCountRef = useLatest(count);
  useEffect(() => {
    const interval = setTimeout(() => {
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <p>count:{count}</p>
    </>
  );
};
