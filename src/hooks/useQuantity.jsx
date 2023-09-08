import { useState } from 'react';

function useQuantity(initialValue) {
  const [quantity, setQuantity] = useState(initialValue);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  }
  const itemsValue = (value) => {
    const data = [1, 2, 3, 4, 5, 6]
    return data.map(item => (
        <option value={item} key={item}>
            {item}
        </option>
    ))
  }
  return {
    quantity,
    setQuantity,
    handleQuantityChange,
    itemsValue
  };
}

export default useQuantity;
