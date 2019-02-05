import React from "react";

import "./Homes.scss";
import houseOne from "../../img/house-1.jpeg";
import houseTwo from "../../img/house-2.jpeg";
import houseThree from "../../img/house-3.jpeg";
import houseFour from "../../img/house-4.jpeg";
import houseFive from "../../img/house-5.jpeg";
import houseSix from "../../img/house-6.jpeg";

function Homes() {
    return (
        <section className='Homes'>
            <div className='home'>
                <img src={houseOne} alt='House 1' className='home__img' />
                <svg className='home__like'>
                    <use xlinkHref='sprite.svg#icon-heart-full' />
                </svg>
                <h5 className='home__name'>Beautiful Family House</h5>
                <div className='home__location'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-map-pin' />
                    </svg>
                    <p>USA</p>
                </div>
                <div className='home__rooms'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-profile-male' />
                    </svg>
                    <p>5 rooms</p>
                </div>
                <div className='home__area'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-expand' />
                    </svg>
                    <p>
                        325 m <sup>2</sup>
                    </p>
                </div>
                <div className='home__price'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-key' />
                    </svg>
                    <p>$1,200,000</p>
                </div>
                <button className='btn home__btn'>Contact realtor</button>
            </div>

            <div className='home'>
                <img src={houseTwo} alt='House 2' className='home__img' />
                <svg className='home__like'>
                    <use xlinkHref='sprite.svg#icon-heart-full' />
                </svg>
                <h5 className='home__name'>Modern Glass Villa</h5>
                <div className='home__location'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-map-pin' />
                    </svg>
                    <p>Canada</p>
                </div>
                <div className='home__rooms'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-profile-male' />
                    </svg>
                    <p>6 rooms</p>
                </div>
                <div className='home__area'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-expand' />
                    </svg>
                    <p>
                        450 m <sup>2</sup>
                    </p>
                </div>
                <div className='home__price'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-key' />
                    </svg>
                    <p>$2,750,000</p>
                </div>
                <button className='btn home__btn'>Contact realtor</button>
            </div>

            <div className='home'>
                <img src={houseThree} alt='House 3' className='home__img' />
                <svg className='home__like'>
                    <use xlinkHref='sprite.svg#icon-heart-full' />
                </svg>
                <h5 className='home__name'>Cozy Country House</h5>
                <div className='home__location'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-map-pin' />
                    </svg>
                    <p>UK</p>
                </div>
                <div className='home__rooms'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-profile-male' />
                    </svg>
                    <p>4 rooms</p>
                </div>
                <div className='home__area'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-expand' />
                    </svg>
                    <p>
                        250 m <sup>2</sup>
                    </p>
                </div>
                <div className='home__price'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-key' />
                    </svg>
                    <p>$800,000</p>
                </div>
                <button className='btn home__btn'>Contact realtor</button>
            </div>

            <div className='home'>
                <img src={houseFour} alt='House 4' className='home__img' />
                <svg className='home__like'>
                    <use xlinkHref='sprite.svg#icon-heart-full' />
                </svg>
                <h5 className='home__name'>Large Rustical Villa</h5>
                <div className='home__location'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-map-pin' />
                    </svg>
                    <p>Portugal</p>
                </div>
                <div className='home__rooms'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-profile-male' />
                    </svg>
                    <p>6 rooms</p>
                </div>
                <div className='home__area'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-expand' />
                    </svg>
                    <p>
                        480 m <sup>2</sup>
                    </p>
                </div>
                <div className='home__price'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-key' />
                    </svg>
                    <p>$1,950,000</p>
                </div>
                <button className='btn home__btn'>Contact realtor</button>
            </div>

            <div className='home'>
                <img src={houseFive} alt='House 5' className='home__img' />
                <svg className='home__like'>
                    <use xlinkHref='sprite.svg#icon-heart-full' />
                </svg>
                <h5 className='home__name'>Majestic Palace House</h5>
                <div className='home__location'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-map-pin' />
                    </svg>
                    <p>Germany</p>
                </div>
                <div className='home__rooms'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-profile-male' />
                    </svg>
                    <p>18 rooms</p>
                </div>
                <div className='home__area'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-expand' />
                    </svg>
                    <p>4230 m <sup>2</sup></p>
                </div>
                <div className="home__price">
                    <svg>
                        <use xlinkHref='sprite.svg#icon-key' />
                    </svg>
                    <p>$9,500,000</p>
                </div>
                <button className="btn home__btn">Contact realtor</button>
            </div>

            <div className='home'>
                <img src={houseSix} alt='House 6' className='home__img' />
                <svg className='home__like'>
                    <use xlinkHref='sprite.svg#icon-heart-full' />
                </svg>
                <h5 className='home__name'>Modern Family Apartment</h5>
                <div className='home__location'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-map-pin' />
                    </svg>
                    <p>Italy</p>
                </div>
                <div className='home__rooms'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-profile-male' />
                    </svg>
                    <p>3 rooms</p>
                </div>
                <div className='home__area'>
                    <svg>
                        <use xlinkHref='sprite.svg#icon-expand' />
                    </svg>
                    <p>180 m <sup>2</sup></p>
                </div>
                <div className="home__price">
                    <svg>
                        <use xlinkHref='sprite.svg#icon-key' />
                    </svg>
                    <p>$600,000</p>
                </div>
                <button className="btn home__btn">Contact realtor</button>
            </div>
        </section>
    );
}

export default Homes;
