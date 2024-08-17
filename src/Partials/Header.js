import React from "react";
import {Link} from "react-router-dom";

import logo from '../Assets/logo.svg'

export default function Header () {

    return (
        <header className="h-[120px] flex justify-between items-center px-8">
            <img src={logo} className="h-[80px]" alt="Take the Moment"/>

            <div className="flex gap-x-8">
                <Link to="#" className="px-4 py-2 bg-blue rounded-2xl text-white border-blue hover:bg-white hover:text-blue">Inscription</Link>
                <Link to="#" className="px-4 py-2 rounded-2xl text-blue hover:bg-blue hover:text-white">Se connecter</Link>
            </div>
        </header>
    )
}