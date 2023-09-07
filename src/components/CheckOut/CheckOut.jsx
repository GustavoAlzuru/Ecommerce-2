import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import OutNavBar from './OutNavBar';
import { CartProd } from '../../context/CartProd';

const CheckOut = () => {
    const { cartProducts } = useContext(CartProd)
    return (
        <div>
            <OutNavBar />
            <div className="container mx-auto py-8 px-5">
                <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
                {cartProducts.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {cartProducts.map((product) => (
                            <div
                                key={product.id}
                                className="flex items-center justify-between border-b border-gray-300 py-2"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-16 h-16 object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold">{product.title}</p>
                                        <p className="text-gray-600">{product.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <p className="font-semibold">${product.price}</p>
                                    <select value={product.quantity}>
                                        <option value={product.quantity}>{product.quantity}</option>
                                    </select>
                                </div>
                            </div>
                        ))}
                        <div className="mt-4">
                            <p className="text-xl font-semibold">
                                Total: $
                                {cartProducts.reduce((total, product) => total + product.price, 0)}
                            </p>
                        </div>

                        {/* FORM FOR PAYMENT */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-4">Payment & Address</h2>
                            <form>
                                {/* Billing Address */}
                                <div className="mb-4">
                                    <label htmlFor="billingAddress" className="block text-gray-600">Billing Address</label>
                                    <textarea
                                        id="billingAddress"
                                        className="w-full p-2 border rounded"
                                        placeholder="Enter your billing address"
                                        rows="4"
                                    ></textarea>
                                </div>

                                {/* Payment Information */}
                                <div className="mb-4">
                                    <label htmlFor="cardNumber" className="block text-gray-600">Card Number</label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        className="w-full p-2 border rounded"
                                        placeholder="Enter your card number"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="expiryDate" className="block text-gray-600">Expiry Date</label>
                                    <input
                                        type="text"
                                        id="expiryDate"
                                        className="w-full p-2 border rounded"
                                        placeholder="MM/YY"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="cvv" className="block text-gray-600">CVV</label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        className="w-full p-2 border rounded"
                                        placeholder="CVV"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="mt-6">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                        Place Order
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CheckOut;
