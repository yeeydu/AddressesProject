import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// @ts-ignore
import { baseUrl, JWTtoken } from "../Shared";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { IAddress } from "../types/addressTypes";
import Swal from "sweetalert2";

function AddAddress() {
  const [error, setError] = useState();
  const [address, setAddress] = useState<Partial<IAddress>>({
    street: "",
    postal_code: "",
    parish: "",
    council: "",
    district: "",
    country: "",
  });

  let navigate = useNavigate();

  /**
   *
   * Submit info Function
   */
  const submitData = () => {
    if (
      address.street === "" ||
      address.council === "" ||
      address.country === "" ||
      address.district === "" ||
      address.parish === "" ||
      address.postal_code === ""
    ) {
      console.log("Enter Values");
      Swal.fire({
        title: "Error!",
        text: "You must fill all fields",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }
    const data: Partial<IAddress> = {
      street: address.street,
      council: address.council,
      country: address.country,
      district: address.district,
      parish: address.parish,
      postal_code: address.postal_code,
    };

    const url = baseUrl;
    axios
      .post(url, data, {
        headers: {
          // Bearer token for authentication
          Authorization: `Bearer ${JWTtoken}`,
          "Content-type": "application/json",
        },
      }) // @ts-ignore
      .then((response) => {
        navigate("/", { state: { message: "New Address added succesfully" } });
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
    //navigate("/");
    console.log(`new item created `);
  };

  /**  handle changes from form */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <div>
        <h3 className="text-center mb-5">Add Address</h3>
      </div>
      <Form>
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
              value={address.street}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your Address
            </Form.Text>
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
              value={address.parish}
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
              value={address.district}
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
              value={address.council}
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
              value={address.postal_code}
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
              value={address.country}
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
      {error
        ? "Can't continue, you don't have permission or something went wrong"
        : null}
    </div>
  );
}
export default AddAddress;
