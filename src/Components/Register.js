import React from 'react'

export default function Register(props) {
    return (
        <div className='container card p-4 mt-2' >
            <h1 className='text-center'>Registration Form</h1>
            <form onSubmit={props.submit} >
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' required className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required className='form-control' />
                </div>
                <button
                    className='btn btn-primary' type='submit'>Register</button>
            </form>
        </div>
    )
}
