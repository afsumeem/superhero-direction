import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1 className="text-primary fw-bolder">The Code Snapshots</h1>
            <p className="fw-lighter mb-4">Programming can be fun, and so can cryptography; <br />however, they should not be combined.</p>
            <h3 className="fw-bold">Total Balance: 20 Million</h3>
            <hr className="w-50 mx-auto"></hr>
        </div>
    );
};

export default Header;