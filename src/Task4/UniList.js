
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const UniList = ({data}) => {
    const id = useParams('Id');
    const [uniList, setUniList]= useState([])
    

  useEffect(()=>{
    let updateddata= data.map((item, index)=>{ return {...item, Id: index+1}})
    let Uni = updateddata.find((item) => item.Id === Number(id.Id));
    setUniList(Uni?.universities)
     
  },[])

 
 

  return (
    <div>
      <h2 className='m-4'>Univeristy Details</h2>
      <div className='m-4'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          
        </tr>
      </thead>
      <tbody>
        {uniList.map((item,index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.country}</td>
           
          </tr>
        ))}
      </tbody>
    </Table>
      </div>
      
    </div>
  );
};

export default UniList;
