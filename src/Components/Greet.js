import React from 'react'

export default function Greet(props) {
    return (
        <div className='container card p-4 mt-2 text-center' >
            <h3>{props.name},</h3>
            <h3>Thank You For Joining Us</h3>
            <h3>Verification Email sent to your {props.email}</h3>
        </div>

    )
}

