// Pagination.js

import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <BootstrapPagination>
      <BootstrapPagination.Prev
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />
      {pageNumbers.map(page => (
        <BootstrapPagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </BootstrapPagination.Item>
      ))}
      <BootstrapPagination.Next
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </BootstrapPagination>
  );
};

export default Pagination;
