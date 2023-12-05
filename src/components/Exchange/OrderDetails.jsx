import React from 'react'
import { useSelector } from 'react-redux'

export default function OrderDetails() {
    const state = useSelector(state => {
        return state.coin
    })
    return (
        <div className="tradeaside order-md-first order-last">
            <p className="tradetitle">Order Details</p>
            <p className="you">You exchange</p>
            <p className="cryptow">
                <img alt="" className="cryptologo" src={state.activecoin.img}
                    style={{ borderRadius: "50%", border: "1px solid #fff" }} /> {state.coinamount} {state.activecoin.shortname} {state.activecoin.chain}
            </p>
            <hr />
            <p className="you">You receive</p>
            <p className="cryptow">
                <img alt="" className="cryptologo" src={state.activefiat.img}
                    style={{ borderRadius: "50%", border: "1px solid #fff" }} /> {state.fiatamount} {state.activefiat.name}
            </p>
            <hr />
            <p className="you">Waiting time</p>
            <p className="wt">≈10 - 90 min</p>
        </div>
    )
}
