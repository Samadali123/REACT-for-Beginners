import React, { useState, useMemo, useCallback } from 'react';

const MemoCallbackExample = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  const [newNumber, setNewNumber] = useState("");

  // useMemo to calculate the sum of even numbers (only recalculates when numbers change)
  const evenSum = useMemo(() => {
    console.log("Calculating sum of even numbers...");
    return numbers.filter(num => num % 2 === 0).reduce((acc, cur) => acc + cur, 0);
  }, [numbers]);

  // useCallback to memoize the function (avoids re-creating it on every render)
  const addNumber = useCallback(() => {
    const parsed = parseInt(newNumber, 10);
    if (!isNaN(parsed)) {
      setNumbers(prev => [...prev, parsed]);
      setNewNumber("");
    }
  }, [newNumber]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Numbers: {numbers.join(", ")}</h2>
      <h3>Sum of even numbers: {evenSum}</h3>

      <input
        type="number"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
        placeholder="Enter number"
      />
      <button onClick={addNumber}>Add Number</button>
    </div>
  );
};

export default MemoCallbackExample;
