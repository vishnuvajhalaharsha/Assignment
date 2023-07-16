
import React, { useState } from 'react';
import Table from './Table';
import Pagination from './Pagination';

const TableComponent = ({ data }) => {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  

  const paginateData = (data, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };
  let updateddata= data.map((item, index)=>{ return {...item, Id: index+1}})
  const paginatedData = paginateData(updateddata, currentPage, itemsPerPage);

  return (
    <>
   <h2 className='m-4'>Task 4</h2>
    <div className='m-4'>
    <Table  data={paginatedData}>
        
        </Table>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          onPageChange={page => {setCurrentPage(page), console.log(page,"page")}}
        />
    </div>
      
      
    </>
  );
};

export default TableComponent;



