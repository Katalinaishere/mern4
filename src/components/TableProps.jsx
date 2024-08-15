import React from 'react';
import { Table } from 'react-bootstrap';

const TableProps = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Petagogu</th>
          <th>Emri i Kursit</th>
          <th>Kreditet</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.lektorName}</td>
            <td>{item.courseName}</td>
            <td>{item.credits}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default TableProps