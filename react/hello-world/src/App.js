import './components/Greet.css';
import { Greet, GreetThree, GreetTwo } from './components/Greet';
import { Welcome, WelcomeTwo } from './components/Welcome';
import Message from './Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import FragmentDemo from './components/FragmentDemo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='blogs' element={<Blogs />}></Route>
            <Route path='contact' element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Greet firstname='Bryan' lastname='Hines'>
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
<FragmentDemo />
      <FunctionClick />
      <ClassClick /> */}
    </div>
  );
}

export default App;
