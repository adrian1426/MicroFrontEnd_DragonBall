import React, { useRef, useEffect } from 'react';
import replaceCard from 'mf_cards/placeCards';

const Cards_mf = () => {
  const refCard = useRef(null);

  useEffect(() => {
    replaceCard(refCard.current);
  }, []);

  return (
    <div ref={refCard}>
    </div>
  );
};

export default Cards_mf;