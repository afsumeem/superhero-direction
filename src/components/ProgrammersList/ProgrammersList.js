import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './ProgrammersList.css'

const ProgrammersList = (props) => {

    const { picture, name, language, company, balance, phone, email } = props.programmer;

    return (
        <div className="card card-container border border-light">

            {/* programmer details */}
            <img src={picture} className="card-img-top mx-auto mt-3" alt="programmer" />
            <div className="card-body">
                <h5 className="card-title mb-4">Name: {name}</h5>
                <p>Language: {language}</p>
                <p>Company: {company}</p>
                <p>Balance: <span className="fs-5 fw-bold">${balance}</span></p>
                <p><FontAwesomeIcon icon={faPhone} /> {phone}</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
            </div>


            {/* add to meeting button */}

            <button
                onClick={() => props.handleMeetingButton(props.programmer)}
                className="btn button w-100 pe-auto">
                <FontAwesomeIcon icon={faHandshake} /> Add to Meeting
            </button>

        </div >
    );
};

export default ProgrammersList;
