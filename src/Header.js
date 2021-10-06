import React from 'react'
import Alert from './Alert'
import Button from './Button'
import { useSelector } from 'react-redux';


export default function Header() {
    const amount = useSelector(state => state.amount);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-brand">Navbar</button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">Home</a>
                        <a className="nav-item nav-link" href="/">About</a>

                    </div>
                </div>
                <button className="btn btn-primary btn-lg">Balance : {amount}</button>
            </nav>
            <Alert/>
            <Button/>
        </div>

    )
}
