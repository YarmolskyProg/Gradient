import React from 'react'

export default function SingleReserv({ res }) {
    let reserv = (Math.floor(Math.random() * res.reserv / 6) + res.reserv)

    return (
        <div className="crypt2">
            <img className="valuti" src={res.img} />
            <div className="ovalute">
                <h6><strong>{res.bank} {res.name}</strong></h6>
                <p>{reserv} {res.name}</p>
            </div>
        </div>
    )
}
