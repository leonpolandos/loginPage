import React from 'react'
import NavBar from '../../molecules/NavBar'

const index = () => {
    return (
        <div className="container mt-5">
            <NavBar />
            <br/>
            <h5 className="alert alert-warning alert-dismissible fade show" role="alert">UNDER <strong>Development</strong> </h5>
        </div>
    )
}

export default index
