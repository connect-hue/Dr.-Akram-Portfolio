import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Publications from './components/Publications';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
