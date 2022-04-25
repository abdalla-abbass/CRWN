import React from "react";
import "./MenuItem.scss";
import { withRouter } from "react-router-dom";

function MenuItem({ title, imageUrl, size, linkURL, history, match }) {
    return (
        <div
            className={`${size === "large" ? size : ""} menu-item`}
            onClick={() => history.push(`${match.url}${linkURL}`)}
        >
            <div
                className="background-img"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            ></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);
