import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import { baseUrl } from "../Shared";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddAddress() {
  // const [street, setStreet] = useState("");
  // const [parish, setParish] = useState("");
  // const [council, setCouncil] = useState("");
  // const [postalCode, setPostalCode] = useState("");
  // const [district, setDistric] = useState("");
  // const [country, setCountry] = useState("");

  let navigate = useNavigate();
  const { Formik } = formik;

  const schema = yup.object().shape({
    street: yup.string().required(),
    parish: yup.string().required(),
    council: yup.string().required(),
    country: yup.string().required(),
    district: yup.string().required(),
    postalCode: yup.string().required(),
    // terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  const submitData = () => {
    const url = baseUrl;
    axios
      .post(
        url,
        { street, parish, council, district, country, postalCode},
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .catch((error) => {
        console.log(error.response);
      })
      .then(() => {
        navigate("/");
      });
    console.log(`new item created `);
  };

  // const handleChange = (e: any) => {
  //   setStreet(e.target.value);
  //   setParish(e.target.value);
  //   setCouncil(e.target.value);
  //   setPostalCode(e.target.value);
  //   setDistric(e.target.value);
  //   setCountry(e.target.value);
  // };

  return (
    <>
    <div>
      <h3 className="text-center mb-5">Add Address</h3>
    </div>
    <Formik
      validationSchema={schema}
      onSubmit={submitData}
      initialValues={{
        street: "",
        parish: "",
        council: "",
        country: "",
        district: "",
        postalCode: "",
        // terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="text"
                name="street"
                placeholder="Street"
                value={values.street}
                onChange={handleChange}
                isValid={touched.street && !errors.street}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Parish</Form.Label>
              <Form.Control
                type="text"
                name="parish"
                placeholder="Parish"
                value={values.parish}
                onChange={handleChange}
                isInvalid={!!errors.parish}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.parish}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Council</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="council"
                  aria-describedby="inputGroupPrepend"
                  name="council"
                  value={values.council}
                  onChange={handleChange}
                  isInvalid={!!errors.council}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.council}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>District</Form.Label>
              <Form.Control
                type="text"
                placeholder="district"
                name="district"
                value={values.district}
                onChange={handleChange}
                isInvalid={!!errors.district}
              />
              <Form.Control.Feedback type="invalid">
                {errors.district}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="postalCode"
                value={values.postalCode}
                onChange={handleChange}
                isInvalid={!!errors.postalCode}
              />

              <Form.Control.Feedback type="invalid">
                {errors.postalCode}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationFormik03">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Country"
                name="country"
                value={values.country}
                onChange={handleChange}
                isInvalid={!!errors.country}
              />

              <Form.Control.Feedback type="invalid">
                {errors.country}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          {/* <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group> */}
          <Button variant="outline-info" type="submit">
            Submit form
          </Button>
        </Form>
      )}
    </Formik>
  </>
  );
}

export default AddAddress;

