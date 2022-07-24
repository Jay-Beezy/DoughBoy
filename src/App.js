import React, {useState} from 'react';
import './App.css'
import DoughBoy from './routes/doughboy';

export default function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <DoughBoy>
    </DoughBoy>
  );
}