import './App.css';
import Home from "./components/home";
import Footer from "./components/footer";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          {/* <Route path="/maincontent" element={<MainContent  pageTitle= {"Weight loss"} numTopics = {5} />} />
          <Route path="/secondcontent" element={<SecondContent  pageTitle= {"Weight loss"} numTopics = {5} />} />
          <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
