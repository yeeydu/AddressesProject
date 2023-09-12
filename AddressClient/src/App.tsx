import TableList from "./components/TableList";
import "./index.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="text-center m-5 pt-5">Addresses Records</h2>
        <TableList/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
