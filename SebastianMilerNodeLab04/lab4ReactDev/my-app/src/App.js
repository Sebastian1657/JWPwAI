import Hello from './Hello';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';
import TodoList from './TodoList';
import LoginForm from './Form';

export default function App() {
  return (
    <>
        <Hello />
        <Counter />
        <InputTracker />
        <LoginStatus isLoggedIn={false} />
        <LoginStatus isLoggedIn={true} />
        <TodoList todos={['Zad1', 'Zad2', 'Zad3']} />
        <LoginForm />
    </>
  );
}