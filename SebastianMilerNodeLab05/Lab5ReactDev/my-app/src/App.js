import './App.css';
import React from 'react';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';
import Zad3 from './Zad3src/Zad3';

function App() {
  const [pokazZad3, setPokazZad3] = React.useState(false);

  const goToZad3 = () => {
    setPokazZad3(true);
  };

  if(pokazZad3){
    return <Zad3 />
  };

  return (
    <div className="App">
      <ToggleDetails />
      <hr />
      <ScoreDisplay score={10} />
      <ScoreDisplay score={60} />
      <ScoreDisplay score={100} />
      <hr />
      <TaskList />
      <hr />
      <UserList />
      <hr />
      <TimerCounter />
      <hr />
      <button onClick={goToZad3}>Przejdź do Zadania 3</button>
    </div>
  );
}

export default App;
