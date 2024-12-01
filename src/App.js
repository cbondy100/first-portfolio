import React, {useState} from 'react';
import './App.css';
import HomePage from './components/HomePage';

export default function App() {
  const [color, setColor] = useState("#1D16E4")
  return (
    <>
      <div class="absolute top-4 right-4">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 h-10 cursor-pointer border-2 border-gray-300 rounded-full"
          title="Choose a color"

        />
      </div>
      <HomePage color={color}/>
    </>
    
  );
}
