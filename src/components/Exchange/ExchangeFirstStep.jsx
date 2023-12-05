import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCard, setEmail, setFirstName, setLastName } from '../../redux/actions'
export default function Exchange({ setredirect }) {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const state = useSelector(state => {
        return state.coin
    })
    function handlerEmail(e) {
        return dispatch(setEmail(e.target.value))
    }
    function handlerAddress(e) {
        return dispatch(setCard(e.target.value))
    }
    function handlerFirstName(e) {
        return dispatch(setFirstName(e.target.value))
    }
    function handlerLastName(e) {
        return dispatch(setLastName(e.target.value))
    }
    function handlerSubmit(e) {
        e.preventDefault()
        setredirect(true)
    }
    return (
        <div className="trademain order-md-last order-first">
            <div className="w-100" id="bit_exchange_results"></div>
            <form id="bit_exchange_form" onSubmit={e => handlerSubmit(e)}>
                <div className="superpuperflex">
                    <div className="kruzhki">
                        <div className="kruzhi__item">
                            <div className="kruzhki__item_in">
                                <p className="kruzhki__text">1</p>
                            </div>
                        </div>
                        <div className="kruzhki_strelka_noactive"></div>
                        <div className="kruzhi__item_noactive">
                            <div className="kruzhki__item_in_noactive">
                                <p className="kruzhki__text">2</p>
                            </div>
                        </div>
                        <div className="kruzhki_strelka_noactive"></div>
                        <div className="kruzhi__item_noactive">
                            <div className="kruzhki__item_in_noactive">
                                <p className="kruzhki__text">3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 style={{ textAlign: "center", marginTop: "15px", fontWeight: "400", color: "#1a1a1a" }}>
                    Enter your destination address
                </h3>
                <input className="adress1" required placeholder="Your email address" value={state.email} type="email" onChange={e => handlerEmail(e)} />
                <input className="adress1" required placeholder="Username Revolut or Wallet address:" value={state.cardnumber} type="text" onChange={e => handlerAddress(e)} />
                <input className="adress1" required placeholder="Last name" value={state.firstname} type="text" onChange={e => handlerFirstName(e)} />
                <input className="adress1" required placeholder="First name" value={state.lastname} type="text" onChange={e => handlerLastName(e)} />
                <button className="letsgo accept-terms" type="submit" >Process exchange</button>
            </form>
        </div>
    )
}
