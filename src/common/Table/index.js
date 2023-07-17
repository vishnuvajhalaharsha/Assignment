import React from "react";

const TableComponent = ({ headers, data }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header, colIndex) => (
              <td key={colIndex}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
