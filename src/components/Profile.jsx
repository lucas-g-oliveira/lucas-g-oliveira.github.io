import "../styles/profile.css";
import React from "react";
import dataProfile from "../data/dataProfile";
import photoProfile from "../images/lucas-g-oliveira.png";
import ghIcon from "../images/github-ico.png";
import linkedinIcon from "../images/linkedin-icon.png";
import emailIcon from "../images/email-icon.png";

export default function Profile(props) {
  const { view } = props;
  return (
    <div className={view ? "profile" : "none"}>
      <article>
        <img
          className="photo-profile"
          src={photoProfile}
          alt={dataProfile.name}
        />
        <div>
          <h4>{dataProfile.name}</h4>
          <h5>{dataProfile.role}</h5>
          <section>
            <a
              href={dataProfile.linkedin}
              alt={dataProfile.linkedin}
              target="_blank"
            >
              <img className="icon" src={linkedinIcon} />
            </a>
            <a
              href={`mailto:${dataProfile.email}`}
              alt={dataProfile.email}
              target="_blank"
            >
              <img className="icon" src={emailIcon} />
            </a>
            <a
              href={dataProfile.gitHub}
              alt={dataProfile.gitHub}
              target="_blank"
            >
              <img className="icon" src={ghIcon} />
            </a>
          </section>
        </div>
      </article>
      <p>{dataProfile.aboutMe}</p>
    </div>
  );
}
