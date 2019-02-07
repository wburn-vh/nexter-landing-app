import React from "react";

import "./Realtors.scss";

function Realtors() {
    return (
        <div className="Realtors">
            <h3 className="heading-3">Top 3 Realtors</h3>
            <div className="Realtors__list">
                <img src={require('../../img/realtor-1.jpeg')} alt="Realtor 1" className="Realtors__img" />
                <div className="Realtors__details">
                    <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
                    <p className="Realtors__sold">245 houses sold</p>
                </div>

                <img src={require('../../img/realtor-2.jpeg')} alt="Realtor 2" className="Realtors__img" />
                <div className="Realtors__details">
                    <h4 className="heading-4 heading-4--light">Kim Brown</h4>
                    <p className="Realtors__sold">212 houses sold</p>
                </div>

                <img src={require('../../img/realtor-3.jpeg')} alt="Realtor 3" className="Realtors__img" />
                <div className="Realtors__details">
                    <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
                    <p className="Realtors__sold">198 houses sold</p>
                </div>
            </div>
        </div>
    );
}

export default Realtors;
