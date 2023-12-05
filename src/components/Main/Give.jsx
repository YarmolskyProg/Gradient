import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleGive from './SingleGive';
import uniqid from 'uniqid'
import { setCoinAmount } from '../../redux/actions';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
const Give = () => {
    const dispatch = useDispatch()
    const [toggle, settoggle] = useState(false);
    let state = useSelector(state => {
        if (state.coin.crypto[0]) {
            return state.coin.crypto[0].coin
        }
    })
    let coin = useSelector(state => {
        return state.coin.coinamount
    })
    let active = useSelector(state => {
        if (state.coin.activecoin)
            return state.coin.activecoin
    })
    function handlerChange(e) {
        dispatch(setCoinAmount(e.target.value.replace(/[^0-9\.]/g, '')))
    }
    const wrapperRef = useRef(null);
    const style = { position: "absolute", inset: "0px 0px auto auto", margin: "0px", transform: "translate3d(-0.5px, 32px, 0px)" }
    useOutsideAlerter(wrapperRef, settoggle)
    return (
        <div className="trade__you_give">
            <p className="trade__text1">You exchange</p>
            <div className="trade__taking" style={{ minHeight: "30px" }}>
                <input className="trade__yougiving iphone-fix" onChange={(e) => handlerChange(e)} style={{ minHeight: "30px" }} type="text" placeholder="0" value={coin} />
                <div className="btn-group obmen_button">
                    <button ref={wrapperRef} className="btn btn-white btn-sm dropdown-toggle" onClick={() => settoggle(!toggle)} >
                        <img className='cryptologo' src={active.img} />&nbsp;{active.name}
                    </button>
                    <ul className={toggle ? "dropdown-menu dropdown-menu-exchange" : "dropdown-menu dropdown-menu-exchange none"}
                        style={window.innerWidth < 542 ? style : {}}
                    >
                        {
                            state &&
                            state.map((res, index) => {
                                return <SingleGive key={index} res={res} id={uniqid()} settoggle={settoggle} active={active} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Give;