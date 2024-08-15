import React from "react";
import TableProps from "./TableProps";

const TableContent = () => {
    const lektorData = [
      { lektorName: 'John Doe', courseName: 'Maths', credits: 4 },
      { lektorName: 'Jane Smith', courseName: 'Physics', credits: 3 },
      { lektorName: 'Alan Brown', courseName: 'Chemistry', credits: 4 },
      { lektorName: 'Emily White', courseName: 'Biology', credits: 3 },
      { lektorName: 'Michael Green', courseName: 'Computer Science', credits: 5 },
    ];
  
    return <TableProps data={lektorData} />;
  };
  
  export default TableContent