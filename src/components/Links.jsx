import React from "react";
import '../styles/links.css'

const Links = (props) => {
    return (
        <section className="links-section">
            <a  target="_blank" id={props.id} href={props.linkAddress} className="links-button">{props.linkName}</a>
        </section>
    )
}

export default Links;