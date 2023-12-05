import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import SingleGet from './SingleGet'
import uniqid from 'uniqid'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'

export default function Get() {
    const [toggle, settogle] = useState(false);
    let state = useSelector(state => {
        if (state.coin.crypto[0]) {
            return state.coin.crypto[0].fiat
        }
    })
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, settogle)
    let active = useSelector(state => {
        if (state.coin.activefiat)
            return state.coin.activefiat
    })
    let fiat = useSelector(state => {
        return state.coin.fiatamount
    })
    const style = { position: "absolute", inset: "0px 0px auto auto", margin: "0px", transform: "translate3d(-0.5px, 32px, 0px)" }
    return (
        <div className="trade__you_take">
            <p className="trade__text1">You receive</p>
            <div className="trade__taking" style={{ minHeight: "30px" }}>
                <input id="bit_gateway_receive" name="bit_gateway_receive" type="hidden"
                    value="0" />
                <input className="trade__yougiving iphone-fix" disabled type="text" value={fiat} />
                <div className="btn-group obmen_button">
                    <button ref={wrapperRef} className="btn btn-white btn-sm dropdown-toggle s" onClick={() => settogle(!toggle)}>
                        <img className='cryptologo' src={active.img} />&nbsp;{active.bank}
                    </button>
                    <ul className={toggle ? "dropdown-menu dropdown-menu-receive" : "dropdown-menu dropdown-menu-receive none"}
                        style={window.innerWidth < 542 ? style : {}}
                    >
                        {
                            state &&
                            state.map((res, index) => {
                                return < SingleGet res={res} key={index} id={uniqid()} settoggle={settogle} active={active} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
