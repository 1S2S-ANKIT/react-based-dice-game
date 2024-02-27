
import './App.css';
import Start from "./components/start";
import { useState } from 'react';
import GamePlay from './components/GamePlay';
import TotalScore from './components/TotalScore';


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <div className='bg'>
      {isGameStarted ? <GamePlay /> : <Start toggle={toggleGamePlay} />}

    </div>
  );
}

export default App;
