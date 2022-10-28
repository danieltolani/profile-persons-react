import React from "react";
import '../styles/links.css'

const Links = (props) => {
    return (
        <section className="links-section">
            <button className="links-button">{props.buttonName}</button>
        </section>
    )
}

export default Links;