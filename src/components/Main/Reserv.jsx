import React from 'react'
import { useSelector } from 'react-redux'
import SingleReserv from './SingleReserv'

export default function Reserv() {

    let state = useSelector(state => {
        if (state.coin.crypto[0]) {
            return state.coin.crypto[0].fiat
        }
    })


    return (
        <div className="obmeni">
            <h2 className="howiw">Our reserve</h2>
            <div className="knopki_obmen">
                {
                    state &&
                    state.map((res, index) => {
                        return <SingleReserv key={index} res={res} />
                    })
                }
            </div>
        </div>
    )
}
