import React, { Fragment } from "react";

import "./Story.scss";
import storyPicOne from "../../img/story-1.jpeg";
import storyPicTwo from "../../img/story-2.jpeg";
import back from "../../img/back.jpg";


function Story() {
    let backgroundStyle = {
      "background-image":
        "linear-gradient(rgba(198, 153, 99, 0.5), rgba(198, 153, 99, 0.5)), url(" + back + ")"
    };

    return (
        <Fragment>
            <div className="Story__pictures" style={backgroundStyle}>
                <img src={storyPicOne} alt="Couple with new house" className="Story__img--1"/>
                <img src={storyPicTwo} alt="New house" className="Story__img--2" />
            </div>

            <div className="Story__content">
                <h3 className="heading-3 mb-sm">Happy Customers</h3>
                <h2 className="heading-2 heading-2--dark mb-md">
                    &ldquo;The best decision of our lives&rdquo;
                </h2>
                <p className="Story__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur distinctio necessitatibus pariatur voluptatibus.
                    Quidem consequatur harum volupta!
                </p>
                <button className="btn">Find your own home</button>
            </div>
        </Fragment>
    );
}

export default Story;
