import Table from "react-bootstrap/Table";

function TableList() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Street</th>
          <th>City</th>
          <th>Parish</th>
          <th>Council</th>
          <th>District</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Mark</td>
          <td>Mark</td>
          <td>Mark</td>
          <td>Mark</td>
          <td>Mark</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableList;
