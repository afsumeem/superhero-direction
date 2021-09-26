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


    return (
        <div>
            <div className="card meeting-added-card">
                <h5 className="mt-3">Programmer added: {cart.length} </h5>
                <h6 className="mt-3">Total Balance: ${totalBalance}</h6>

                <button
                    className="btn button w-100 pe-auto mt-4">
                    Start Meeting <FontAwesomeIcon icon={faCheck} />
                </button>
            </div>

            <div className="card mt-4 meeting-added-card">
                <h6 className="mt-2">Meeting Members Name</h6>
                <hr className="w-75 mx-auto" />
                {cart.map(programmer => <p>Name: {programmer.name}</p>)}
            </div>





        </div>
    );
};

export default Cart;