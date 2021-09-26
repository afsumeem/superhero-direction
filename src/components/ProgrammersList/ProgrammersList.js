import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './ProgrammersList.css'

const ProgrammersList = (props) => {

    const { picture, name, language, company, balance, phone, email } = props.programmer;

    return (
        <div className="card card-container">

            {/* programmer details */}
            <img src={picture} className="card-img-top mx-auto mt-3" alt="programmer" />
            <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <p>Language: {language}</p>
                <p>Company: {company}</p>
                <p>Balance: ${balance}</p>
                <p><FontAwesomeIcon icon={faPhone} /> {phone}</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
            </div>


            {/* add to cart button */}

            <button
                onClick={() => props.handleCartButton(props.programmer)}
                className="btn btn-primary w-100 pe-auto">
                <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
            </button>

        </div >
    );
};

export default ProgrammersList;
