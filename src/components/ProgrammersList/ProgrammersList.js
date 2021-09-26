import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './ProgrammersList.css'

const ProgrammersList = (props) => {

    //set button desable
    const [disable, setDisable] = React.useState(false);


    //destructuring properties
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
                disabled={disable}
                onClick={() => {
                    props.handleMeetingButton(props.programmer);
                    setDisable(true);
                }
                }
                className="btn button w-100 pe-auto">
                <FontAwesomeIcon icon={faHandshake} /> Add to Meeting
            </button>

        </div >
    );
};

export default ProgrammersList;
