import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './state/action-creators/index';


export default function Button() {
    const dispatch = useDispatch();
    const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch);

    return (
        <div className="container text-center">
            
            <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
                <button type="button" className="btn btn-secondary" onClick={() => {depositMoney(100)}}>+</button>
                <button type="button" className="btn btn-secondary">Middle</button>
                <button type="button" className="btn btn-secondary" onClick={() => {withdrawMoney(100)}}>-</button>
            </div>
        </div>
    )
}
