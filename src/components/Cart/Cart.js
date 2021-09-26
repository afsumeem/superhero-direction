import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { cart } = props;

    let totalBalance = 0;
    for (const programmer of cart) {
        totalBalance = totalBalance + programmer.balance;
    };

    let programmersName = '';
    for (const programmer of cart) {
        programmersName = programmer.name;
    };

    return (
        <div className="card">
            <h2>Programmer added: {cart.length} </h2>
            <p>Total Balance: ${totalBalance}</p>
            <h5>Name: {programmersName}</h5>

            <button
                className="btn btn-primary w-100 pe-auto">
                Confirm <FontAwesomeIcon icon={faCheck} />
            </button>
        </div>
    );
};

export default Cart;