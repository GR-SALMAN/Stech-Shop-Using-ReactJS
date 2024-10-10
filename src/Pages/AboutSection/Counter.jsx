import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Counter = ({ endValue, duration, unit }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = endValue;
    const totalTime = duration * 100; // Convert duration to milliseconds
    const incrementTime = totalTime / end; // Time between each increment

    const incrementCounter = () => {
      if (start < end) {
        setCount(start);
        start += 1;
        setTimeout(incrementCounter, incrementTime);
      } else {
        setCount(end); // Ensure it ends at the final value
      }
    };

    incrementCounter();
  }, [endValue, duration]);

  return (
    <h3 className="text-3xl font-bold gradient-text">
      {count}
      {unit}+
    </h3>
  );
};

export default Counter;
