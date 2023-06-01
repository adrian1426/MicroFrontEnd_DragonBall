import React, { useState, useEffect } from 'react';

const Details = (props) => {
  const { id } = props;
  const [data, setData] = useState(null);

  const getDetailById = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getDetailById();
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div>
        <img src={data?.image} alt={data?.name} />
        <h1>{data?.name}</h1>
        <h3>{data?.type}</h3>
      </div>
    </div>
  );
};

export default Details;