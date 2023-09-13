import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

function FormShare(props: any) {
  const { Formik } = formik;

  const schema = yup.object().shape({
    street: yup.string().required(),
    parish: yup.string().required(),
    council: yup.string().required(),
    country: yup.string().required(),
    district: yup.string().required(),
    zip: yup.string().required(),
   // terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        street: "Avenida",
        parish: "Paranhos",
        council: "Porto",
        country: "Portugal",
        district: "Porto",
        zip: "0000",
        terms: false,
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
                value={values.parish}
                onChange={handleChange}
                isValid={touched.parish && !errors.parish}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Council</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Username"
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
                placeholder="State"
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
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
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
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormShare;
