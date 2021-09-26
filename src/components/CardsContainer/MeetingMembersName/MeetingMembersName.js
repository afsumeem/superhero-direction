import React from 'react';
import './MeetingMembersName.css'

const MeetingMembersName = (props) => {
    const { name } = props.programmer;

    return (
        <div>
            <p className="fs-5 font-monospace" > - {name}</p>
        </div>
    )
};

export default MeetingMembersName;