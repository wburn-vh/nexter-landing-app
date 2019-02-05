import React from "react";

import "./Gallery.scss";

function Gallery() {
    return (
        <section className='Gallery'>
            <figure className='Gallery__item Gallery__item--1'>
                <img
                    src={require("../../img/gal-1.jpeg")}
                    alt='Gallery pic 1'
                    className='Gallery__img'
                />
            </figure>

            <figure className='Gallery__item Gallery__item--2'>
                <img
                    src={require("../../img/gal-2.jpeg")}
                    alt='Gallery pic 2'
                    className='Gallery__img'
                />
            </figure>

            <figure className='Gallery__item Gallery__item--3'>
                <img
                    src={require("../../img/gal-3.jpeg")}
                    alt='Gallery pic 3'
                    className='Gallery__img'
                />
            </figure>

            <figure className='Gallery__item Gallery__item--4'>
                <img
                    src={require("../../img/gal-4.jpeg")}
                    alt='Gallery pic 4'
                    className='Gallery__img'
                />
            </figure>

            <figure className='Gallery__item Gallery__item--5'>
                <img
                    src={require("../../img/gal-5.jpeg")}
                    alt='Gallery pic 5'
                    className='Gallery__img'
                />
            </figure>

            <figure className='Gallery__item Gallery__item--6'>
                <img
                    src={require("../../img/gal-6.jpeg")}
                    alt='Gallery pic 6'
                    className='Gallery__img'
                />
            </figure>

            <figure className='Gallery__item Gallery__item--7'>
                <img
                    src={require("../../img/gal-7.jpeg")}
                    alt='Gallery pic 7'
                    className='Gallery__img'
                />
            </figure>

            <figure className='Gallery__item Gallery__item--8'>
                <img
                    src={require("../../img/gal-8.jpeg")}
                    alt='Gallery pic 8'
                    className='Gallery__img'
                />
            </figure>

            <figure className='Gallery__item Gallery__item--9'>
                <img
                    src={require("../../img/gal-9.jpeg")}
                    alt='Gallery pic 9'
                    className='Gallery__img'
                />
            </figure>

            <figure className='Gallery__item Gallery__item--10'>
                <img
                    src={require("../../img/gal-10.jpeg")}
                    alt='Gallery pic 10'
                    className='Gallery__img'
                />
            </figure>

            <figure className='Gallery__item Gallery__item--11'>
                <img
                    src={require("../../img/gal-11.jpeg")}
                    alt='Gallery pic 11'
                    className='Gallery__img'
                />
            </figure>

            <figure className='Gallery__item Gallery__item--12'>
                <img
                    src={require("../../img/gal-12.jpeg")}
                    alt='Gallery pic 12'
                    className='Gallery__img'
                />
            </figure>

            <figure className='Gallery__item Gallery__item--13'>
                <img
                    src={require("../../img/gal-13.jpeg")}
                    alt='Gallery pic 13'
                    className='Gallery__img'
                />
            </figure>
            <figure className='Gallery__item Gallery__item--14'>
                <img
                    src={require("../../img/gal-14.jpeg")}
                    alt='Gallery pic 14'
                    className='Gallery__img'
                />
            </figure>
        </section>
    );
}

export default Gallery;
