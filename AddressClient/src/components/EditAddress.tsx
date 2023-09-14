import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { baseUrl } from "../Shared";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IAddress } from "../types/addressTypes";
import axios from "axios";

function EditAddress() {
  const [address, setAddress] = useState<Partial<IAddress>>({
    street: "",
    postal_code: "",
    parish: "",
    council: "",
    district: "",
    country: "",
  });

  let navigate = useNavigate();

  const { id } = useParams();

  // fetch data to show in form
  useEffect(() => {
    const url = baseUrl + "/" + id;
    axios.get<IAddress>(url).then((response) => {
      setAddress({
        street: response.data.data.street,
        council: response.data.data.council,
        country: response.data.data.country,
        district: response.data.data.district,
        parish: response.data.data.parish,
        postal_code: response.data.data.postal_code,
      });
    });
  }, []);

  const submitData = () => {
    if (
      address.street === "" ||
      address.council === "" ||
      address.country === "" ||
      address.district === "" ||
      address.parish === "" ||
      address.postal_code === ""
    ) {
      alert("Enter Values");
      return;
    }
    const data: Partial<IAddress> = {
      id: address.id,
      street: address.street,
      council: address.council,
      country: address.country,
      district: address.district,
      parish: address.parish,
      postal_code: address.postal_code,
    };

    const url = baseUrl + "/" + id;
    axios
      .put(url, data, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        navigate("/", { state: { message: "Address edited succesfully" } }); 
      })
      .catch((error) => {
        console.log(error);
      });
      //navigate("/")
    console.log(`Item edited `);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setAddress({
      ...address,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <div>
        <h3 className="text-center mb-5">Edit Address</h3>
      </div>
      <Form id="form">
        <Row className="mb-3">
          <Form.Group
            className="mb-3"
            as={Col}
            md="7"
            controlId="formBasicEmail"
          >
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="text"
              name="street"
              placeholder="Street"
              onChange={handleChange}
              value={address.street || ""}
              required
            />
            <Form.Text className="text-muted"></Form.Text>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            className="mb-3"
            as={Col}
            md="4"
            controlId="formBasicPassword"
          >
            <Form.Label>Parish</Form.Label>
            <Form.Control
              type="text"
              placeholder="Parish"
              aria-describedby="inputGroupPrepend"
              name="parish"
              required
              onChange={handleChange}
              value={address.parish || ""}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            className="mb-3"
            as={Col}
            md="4"
            controlId="formBasicText"
          >
            <Form.Label>District</Form.Label>
            <Form.Control
              type="text"
              placeholder="district"
              name="district"
              onChange={handleChange}
              required
              value={address.district || ""}
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            className="mb-3"
            as={Col}
            md="4"
            controlId="formBasicPassword"
          >
            <Form.Label>Council</Form.Label>
            <Form.Control
              type="text"
              placeholder="Porto"
              name="council"
              required
              onChange={handleChange}
              value={address.council || ""}
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3"
            as={Col}
            md="3"
            controlId="formBasicPassword"
          >
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="1123-432"
              name="postal_code"
              onChange={handleChange}
              required
              value={address.postal_code || ""}
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="formBasicEmail">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Country"
              name="country"
              onChange={handleChange}
              required
              value={address.country || ""}
            />
            <Form.Text className="text-muted"></Form.Text>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
        </Row>
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
      </Form>
    </div>
  );
}

export default EditAddress;
