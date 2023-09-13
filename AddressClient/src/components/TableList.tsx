import Table from "react-bootstrap/Table";
import fetch from "./Fetch";
import { baseUrl } from "../Shared";
import { Button } from "react-bootstrap";

function TableList() {
  // API baseUrl
  const url = baseUrl + "/getall";
  //data is source:{data} the property/ use custom fetch
  const {
    data: { data } = {},
    error,
    loading,
  } = fetch(url, {
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
          ? data.map((address: any) => {
              return (
                <tr key={address.id}>
                  <td> {address.street}</td>
                  <td>{address.parish}</td>
                  <td>{address.council}</td>
                  <td>{address.postal_code}</td>
                  <td>{address.district}</td>
                  <td>{address.country}</td>
                  <td>
                  <Button variant="outline-secondary" size="sm">Edit</Button>{' '}
                    <Button variant="outline-danger" size="sm">Delete</Button>
                    </td>
                </tr>
              );
            }).reverse()
          : loading}
        {error ? error : null}
      </tbody>
    </Table>
  );
}

export default TableList;
