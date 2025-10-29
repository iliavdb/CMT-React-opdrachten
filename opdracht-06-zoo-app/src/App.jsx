import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import DetailPage from './Pages/DetailPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animal/:animalId" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;