import { Button } from "react-bootstrap";
import Addresses from "./Addresses";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  /**
   *  Home page with List of Address Component and add new record button
   */
  return (
    <div className="">
      <h2 className="text-center ">Addresses Records</h2>
      <div className="text-right mb-2">
        <Button variant="outline-info" onClick={() => navigate("/add")}>
          Add
        </Button>
      </div>
      <Addresses />
    </div>
  );
}
