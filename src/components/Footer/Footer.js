import React from "react";

import "./Footer.scss";

function Footer() {
    return (
        <footer className='Footer'>
            <ul className='nav'>
                <li className='nav__item'>
                    <p className='nav__link'>
                        Find your dream home
                    </p>
                </li>

                <li className='nav__item'>
                    <p className='nav__link'>
                        Request proposal
                    </p>
                </li>

                <li className='nav__item'>
                    <p className='nav__link'>
                        Download home planner
                    </p>
                </li>

                <li className='nav__item'>
                    <p className='nav__link'>
                        Contact us
                    </p>
                </li>

                <li className='nav__item'>
                    <p className='nav__link'>
                        Submit your property
                    </p>
                </li>

                <li className='nav__item'>
                    <p className='nav__link'>
                        Come work with us
                    </p>
                </li>
            </ul>
            <p className="copyright">
                &copy; Copyright 2019 by Vitalii Hudanets. Designed by Jonas Schmedtmann.
            </p>
        </footer>
    );
}

export default Footer;
