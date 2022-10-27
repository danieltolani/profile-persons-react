import React from "react";
import '../styles/profile.css'

const Profile = (props) => {
    return (
        <section className="profile-section">
            <img id="profile__img" src={props.img} />
            <h4 id="twitter"> {props.userName} </h4>
            <h4 style={{display:"none"}} id="slack"> {props.slackName}</h4>
        </section>
    )
}

export default Profile;