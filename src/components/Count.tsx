import React from "react";

interface CountProps {
  initialValue?: number;
}

const Count: React.FC<CountProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = React.useState<number>(initialValue);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Adicionar</button>
    </div>
  );
};

export default Count;
