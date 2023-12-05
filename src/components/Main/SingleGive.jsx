import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { calc, setActiveCoin } from '../../redux/actions';

const SingleGive = ({ res, id, settoggle, active }) => {
    const dispatch = useDispatch()
    function handlerClick() {
        dispatch(setActiveCoin(res, id))
        dispatch(calc())
        settoggle(false)
    }
    useEffect(() => {
        if (res.name === 'Ethereum') {
            dispatch(setActiveCoin(res, id))
        }
    }, []);

    return (
        <li onClick={handlerClick} style={{ cursor: "pointer" }}>
            <a className={active.name === res.name ? "dropdown-item dropdown-item-exchange active" : "dropdown-item dropdown-item-exchange"} >
                <img alt="" className="cryptologo" src={res.img} />&nbsp;{res.name}</a>
        </li>
    );
}

export default SingleGive;
