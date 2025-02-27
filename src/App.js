import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Services';
import Login from './pages/Login';
import Register from './pages/Register';
import MainToDoItems from './pages/MainToDoItems';

function App() {
  return (
    <div>
      <Header />
      <main className="container my-4 min-vh-100">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/maintodoitems' element={<MainToDoItems />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
