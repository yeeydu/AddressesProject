import Button from "react-bootstrap/Button";
import { baseUrl } from "../Shared";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

/**
 *  Delete component with a confirm message
 */
export default function DeleteAddress() {
  let navigate = useNavigate();

  const { id } = useParams();

  const submitData = () => {
    const url = baseUrl + "/" + id;
    axios
      .delete(url, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        navigate("/", { state: { message: " Address deleted succesfully" } });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(`item deleted `);
  };

  return (
    <div className="container">
      <div>
        <h3 className="text-center mb-5">Delete Address</h3>
        <h4 className="text-center">
          Are you sure you want to delete this address?
        </h4>
      </div>
      <div className="col-md-12 text-center">
        <Button variant="outline-info" type="button" onClick={submitData}>
          Submit
        </Button>
        <Button
          variant="outline-info"
          type="button"
          onClick={() => navigate("/")}
        >
          Back{" "}
        </Button>
      </div>
    </div>
  );
}
