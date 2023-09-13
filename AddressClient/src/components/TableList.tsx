import Table from "react-bootstrap/Table";
import fetch from "./Fetch";
import { baseUrl } from "../Shared";

function TableList() {
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

  //striped bordered
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
