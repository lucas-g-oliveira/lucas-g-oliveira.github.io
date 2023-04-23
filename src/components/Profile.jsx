import "../styles/profile.css"
import React from "react";
import dataProfile from "../data/dataProfile";
import photoProfile from "../images/lucas-g-oliveira.png";

export default function Profile(){
  return (
    <div className="profile">
      <img className="photo-profile" src={photoProfile} alt={dataProfile.name} />
      <h4>{dataProfile.name}</h4>
      <h4>{dataProfile.role}</h4>
      <h4>{dataProfile.email}</h4>
      <h4>{dataProfile.gitHub}</h4>
      <h4>{dataProfile.linkedin}</h4>
    </div>
    )
}