// TableComponent.js

import React from 'react';
import { Table } from 'react-bootstrap';
import {Link} from "react-router-dom"


const TableComponent = ({ data }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((item,index) => (
          <tr key={item.id}>
            <td>{item.Id}</td>
            <td><Link to={{ pathname: `/universities/${item.Id}` }}>{item.course}</Link></td>
           
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
