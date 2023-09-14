import Table from "react-bootstrap/Table";
import fetchHook from "./Fetch";
import { baseUrl } from "../Shared";
import { Button } from "react-bootstrap";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Addresses() {
  const [info, setInfo] = useState();
  const { id } = useParams();

  let navigate = useNavigate();

  // API baseUrl
  const url = baseUrl;
  //Get API use custom fetch component | data is source:{data} the property
  const {
    data: { data } = {},
    error,
    loading,
  } = fetchHook(baseUrl + "/getall", {
    method: "GET",
    headers: {
      //"Content-Type": "application/json",
      //Authorization: "Bearer ",
    },
  });

  //we can use "striped bordered" style
  return (
    <Table hover responsive="sm">
      <thead>
        <tr>
          <th>Street</th>
          <th>Parish</th>
          <th>Council</th>
          <th>Zip</th>
          <th>District</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data
          ? data
              .map((address: any) => {
                return (
                  <tr key={address.id}>
                    <td> {address.street}</td>
                    <td>{address.parish}</td>
                    <td>{address.council}</td>
                    <td>{address.postal_code}</td>
                    <td>{address.district}</td>
                    <td>{address.country}</td>
                    <td>
                      <Link to={"/edit/" + address.id}>
                        <Button variant="outline-secondary" size="sm">
                          Edit
                        </Button>{" "}
                      </Link>
                      <Link to={"/delete/" + address.id}>
                        <Button
                          onClick={() => navigate("delete/id")}
                          variant="outline-danger"
                          size="sm"
                        >
                          Delete
                        </Button>
                      </Link>
                    </td>
                  </tr>
                );
              })
              .reverse()
          : loading}
        {error ? error : null}
      </tbody>
    </Table>
  );
}

export default Addresses;
