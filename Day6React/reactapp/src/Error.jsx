import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();

  return (
    <div className='text-center mt-4'>
      <h1>Oopsss.Something went wrong!!!!!</h1>
      <h4>
        {err?.status || 500} - {err?.statusText || 'Unexpected Error'}
      </h4>
      <h5>{err?.data || 'Please try again later.'}</h5>
    </div>
  );
};

export default Error;
