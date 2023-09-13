import Table from "react-bootstrap/Table";

function TableList() {
  //striped bordered
  return (
    <Table  hover> 
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
