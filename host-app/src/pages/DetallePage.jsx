import React from 'react';
import { useParams } from 'react-router-dom';
import PersonajeDetailPage from "mf_details/Detail";

const DetallePage = () => {
  const params = useParams();

  return (
    <PersonajeDetailPage id={params.id} />
  );
};

export default DetallePage;