import './components/Greet.css';
import { Greet, GreetThree, GreetTwo } from './components/Greet';
import { Welcome, WelcomeTwo } from './components/Welcome';
import Message from './Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';

function App() {
  return (
    <div>
      <Greet firstname='Bryan' lastname='Hines'>
        <button>Click</button>
        <p>More text...</p>
      </Greet>
      <Greet firstname='David' lastname='Townsend' />
      <Greet firstname='Robert' lastname='Guerra' />
      <GreetTwo firstname='Moses' lastname='Pacheco' />
      <GreetThree firstname='Lydia' lastname='Smith' />
      <Welcome firstname='Bryan' lastname='Hines' />
      <Welcome firstname='David' lastname='Townsend' />
      <Welcome firstname='Robert' lastname='Guerra' />
      <WelcomeTwo firstname='Moses' lastname='Pacheco' />
      <WelcomeTwo firstname='Lydia' lastname='Smith' />
      <Message />
      <Counter />

      <FunctionClick />
    </div>
  );
}

export default App;
