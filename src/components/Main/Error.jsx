import React from 'react';
import { useSelector } from 'react-redux';

const Error = () => {
    let mindep = useSelector(state => {
        return state.coin.mindep
    })
    return (
        <div id="bit_exchange_results" style={{ margin: '3%', width: '94%', borderRadius: ' 5px' }}>
            <div className="alert alert-danger">
                <i className="fa fa-times-circle"></i> The amount for exchange must be more than {mindep} USD and not exceed the reserve
            </div>
        </div>
    );
}

export default Error;
