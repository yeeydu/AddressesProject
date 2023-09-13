import { Button } from "react-bootstrap";
import TableList from "../components/TableList";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();


  return (
    <div className="">
      <h2 className="text-center ">Addresses Records</h2>
      <div className="text-right mb-2">
        <Button variant="outline-info" onClick={()=> navigate('/add')}>
          Add
        </Button>
      </div>
      <TableList />
    </div>
  );
}
