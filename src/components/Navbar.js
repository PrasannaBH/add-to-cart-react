import React, {useState} from 'react'
import { BsBag } from "react-icons/bs";
import Cart from './Cart';
import { a } from 'react-router-dom';

export default function Navbar() {

    const [switchToggled, setswitchToggled] = useState(false)

    const ToggleSwitch = () => {
        switchToggled ? setswitchToggled(false) : setswitchToggled(true);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold">Brand Name</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">Product</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">Contact</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-dark ms-2" onClick={ToggleSwitch}>
                        <BsBag />  Bag
                    </button>
                    {switchToggled ? <Cart/> : null}
                    </div>
                </div>
            </nav>
        </div>
    )
}
