import { useState } from 'react';

function useQuantity(initialValue) {
  const [quantity, setQuantity] = useState(initialValue);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  return {
    quantity,
    setQuantity,
    handleQuantityChange,
  };
}

export default useQuantity;
