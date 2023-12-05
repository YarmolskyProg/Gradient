import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setError } from '../../redux/actions';
import Error from './Error';
import Get from './Get';
import Give from './Give';

const ExchangeForm = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    function handlerSubmit(e) {
        e.preventDefault()
    }
    let state = useSelector(state => {
        return state.coin
    })
    let error = useSelector(state => {
        return state.coin.error
    })
    function handlerClick() {

        if ((state.fiatamount * state.activefiat.rate) < state.mindep || (state.fiatamount * state.activefiat.rate) > state.activefiat.reserv*state.activefiat.rate) {
            return dispatch(setError(true))
        }
        return (
            dispatch(setError(false)),
            navigate('/exchange')
        )
    }
    return (
        <form onSubmit={e => handlerSubmit(e)}>
            {
                error &&
                <Error />
            }
            <Give />
            <p className="trade__p"><span id="bit_exchange_rate">1 {state.activecoin.shortname} = {((1 / state.activefiat.rate) * state.activecoin.rate).toFixed(6)} {state.activefiat.name}</span></p>
            <Get />
            <button className="trade__button" style={{ color: "white" }} onClick={handlerClick} >Start exchange</button>
        </form >
    );
}

export default ExchangeForm;
