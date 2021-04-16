import React from 'react'

const Card = ({email, fullName, avatar}) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={avatar} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">{fullName}</p>
                <p className="card-text">{email}</p>
            </div>
        </div>
    )
}

export default Card
