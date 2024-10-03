import React, { useState } from 'react';
import axios from 'axios';

const AddTwoNumbers = () => {
  const [result, setResult] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleAddition = async () => {
    try {
      const response = await axios.get(`http://192.168.1.9:8080/add`, {
        params: {
          num1: num1,
          num2: num2,
        
        },
      });
     // console.log(response);
      setResult(response.data);

    } catch (error) {
      console.error("Error fetching data:", error);
      setResult(null);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Add Two Numbers</h2>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={handleAddition} style={{ padding: '5px 10px' }}>
          Add
        </button>
      </div>
      {result !== null && (
        <h3 style={{ marginTop: '20px' }}>Result: {result}</h3>
      )}
    </div>
  );
};

export default AddTwoNumbers;
