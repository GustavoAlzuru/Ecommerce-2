import { useContext } from "react";
import { CartProd } from "../context/CartProd";

function useTotalPrice() {
    const { cartProducts } = useContext(CartProd)
    const prices = cartProducts.map(prod => {
        const results = prod.price * prod.quantity
        return parseFloat(results.toFixed(2))
    })
    const total = prices.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    const formattedTotal = total.toFixed(2)

    return { formattedTotal }
}
export default useTotalPrice