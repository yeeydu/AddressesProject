import Table from "react-bootstrap/Table";
import fetch from "./Fetch";
import { baseUrl } from "../Shared";
import { Button } from "react-bootstrap";
import { useParams,  Link } from "react-router-dom";

function TableList() {

  const { id } = useParams()
  
  // API baseUrl
  const url = baseUrl + "/getall";
  //Get API use custom fetch component | data is source:{data} the property
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

  function deleteAddress() {
    const url = baseUrl + id;
    fetch(url, {
        method: 'DELETE',
        headers: {
            //'Content-Type': 'application/json', 
            //Authorization: 'Bearer ' + localStorage.getItem('access'),
        }
    });
  }
 

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
                    <Link to={"/address/" + address.id}>
                      <Button   variant="outline-secondary" size="sm">
                        Edit
                      </Button>{" "}
                      </Link>
                      <Button onClick={deleteAddress} variant="outline-danger" size="sm">
                        Delete
                      </Button>
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

export default TableList;
