import { Button } from "react-bootstrap";
import TableList from "../components/TableList";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();


  return (
    <div className="container">
      <h2 className="text-center m-5 pt-5">Addresses Records</h2>
      <div className="text-right mb-2">
        <Button variant="outline-info" onClick={navigate('/AddAddress')}>
          Add
        </Button>
      </div>
      <TableList />
    </div>
  );
}
