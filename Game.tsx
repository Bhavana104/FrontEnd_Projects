import React, { useState } from 'react';

const letters = [
  ['a', 'p', 'p', 'l', 'e'],
  ['p', 'a', 'r', 'i', 's'],
  ['c', 'o', 'd', 'e', 's'],
  ['d', 'e', 'b', 'u', 'g'],
  ['j', 'u', 'n', 'e', 's'],
];

const Game: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would handle the logic of checking the input
    // against the letters array and updating the UI accordingly.
    console.log('Submitted letter:', inputValue);
    setInputValue('');
  };

  return (
    <div>
      <h1>Game</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Guess a letter"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {letters.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((letter, colIndex) => (
              <div
                key={colIndex}
                style={{
                  width: 50,
                  height: 50,
                  margin: 5,
                  backgroundColor:
                    inputValue === letter
                      ? 'yellow'
                      : rowIndex === 0
                      ? 'green'
                      : 'gray',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 24,
                  color: 'white',
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;