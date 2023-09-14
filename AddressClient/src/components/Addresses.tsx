import Table from "react-bootstrap/Table";
import fetchHook from "./Fetch";
import { baseUrl } from "../Shared";
import { Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Addresses() {
  const [info, setInfo] = useState();
  const { id } = useParams();

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

  /*
   if(location?.state){
          Swal.fire({
            icon: "success",
            title: location?.state?.message,
          });
          redirect(location.pathname, {replace: true});
        }
        */

  // const deleteAddress = fetchHook(url +"/"+ id, {
  //   method: "DELETE",
  //   headers: {
  //     //"Content-Type": "application/json",
  //     //Authorization: "Bearer ",
  //   },
  // });

  const deleteAddress = (id: any) => {
    axios.delete(url + "/" + id).then((getData) => {
      setInfo(getData.data);
    });
    console.log(`item ${id} deleted `);
  };

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
                          onClick={deleteAddress}
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
