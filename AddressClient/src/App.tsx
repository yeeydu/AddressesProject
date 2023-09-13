import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path='/' element={<Home />} />
            
          </Routes>
          <Footer />
        </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
