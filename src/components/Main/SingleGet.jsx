import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { calc, setActiveFiat } from '../../redux/actions';

export default function SingleGet({ res, id, settoggle, active }) {
    const dispatch = useDispatch()
    function handlerClick() {
        dispatch(setActiveFiat(res, id))
        dispatch(calc())
        settoggle(false)
    }
    useEffect(() => {
        if (res.bank === 'Revolut') {
            dispatch(setActiveFiat(res, id))
        }
    }, []);
    return (
        <li onClick={handlerClick} style={{ cursor: "pointer" }}>
            <a className={active.bank === res.bank ? "dropdown-item dropdown-item-receive active" : "dropdown-item dropdown-item-receive"}>
                <img alt="" className="cryptologo" src={res.img} />&nbsp;{res.bank}</a>
        </li>
    )
}
