import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ProgrammersList from '../ProgrammersList/ProgrammersList';

import './CardsContainer.css'

const CardsContainer = () => {

    //set programmers data
    const [programmers, setProgrammers] = useState([]);

    //set cart
    const [cart, setCart] = useState([])

    //load data

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, []);


    // handle add to meeting button

    const handleMeetingButton = programmer => {
        const newCart = [...cart, programmer];
        setCart(newCart);
    }


    return (
        <div className="container">
            <div className="row">

                {/* All programmers list container */}
                <div className="programmer-container col-md-9 border-end">
                    {
                        programmers.map(programmer => <ProgrammersList
                            programmer={programmer}
                            key={programmer._id}
                            handleMeetingButton={handleMeetingButton}
                        >
                        </ProgrammersList>)
                    }
                </div>


                {/* Cart container */}
                <div className="cart-container col-md-3">

                    <Cart cart={cart} />

                </div>
            </div>
        </div>
    );
};

export default CardsContainer;