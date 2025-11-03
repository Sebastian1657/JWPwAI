import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';

function App() {
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
    </div>
  );
}

export default App;
