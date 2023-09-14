import Table from "react-bootstrap/Table";
//import fetchHook from "./Fetch";
import { baseUrl } from "../Shared";
import { Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { IAddress } from "../types/addressTypes";
import axios from "axios";
import Swal from "sweetalert2";

function Addresses() {
  let navigate = useNavigate();
  let location = useLocation();

  const [address, setAddress] = useState<IAddress[]>([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchAddressList = async () => {
    try {
      const response = await axios.get<IAddress[]>(baseUrl + "/getall");
      setAddress(response.data.data);
      setLoading(false);
      if(location?.state){
        Swal.fire({
            icon: "success",
            title: location?.state?.message
        })
        navigate(location.pathname, {replace: true});
      }
    } catch (error: any) {
      setError(error);
      setLoading(true);
      console.log("an error ocurred");
    }
  };

  useEffect(() => {
    fetchAddressList();
  }, []);

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
        {address
          ? address
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
