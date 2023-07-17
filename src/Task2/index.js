
import React from 'react';

import CommonTableComponent from '../common/Table';
import { UserData, headers } from './mockdata';

const StudentComponent = () => {
return (
    <>
   <h2 className='m-4'>Task 2</h2>
    <div className='m-4'>
      <CommonTableComponent headers={headers} data={UserData} />
   </div>
      
      
    </>
  );
};

export default StudentComponent;



