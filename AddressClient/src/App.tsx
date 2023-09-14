import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import EditAddress from "./components/EditAddress";
import AddAddress from "./components/AddAddress";
import DeleteAddress from "./components/DeleteAddress";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddAddress />} />
            <Route path="/edit/:id" element={<EditAddress/>} />
            <Route path="/delete/:id" element={<DeleteAddress/>} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
