import './App.css';
import Todo from './components/Todo';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      
        <div className="mt-3"> <Navbar />
        </div>
        <Routes>
          <Route exact path="/todo" element={<Todo />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
