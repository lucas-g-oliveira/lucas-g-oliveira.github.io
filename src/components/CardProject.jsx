import "../styles/cardProject.css";
import close from "../images/closeIcon.png";
import TecnologyIcon from "./TecnologyIcon";
import patrickImg from "../images/patrick.png";
import PlayMovie from "./PlayMovie";

export default function CardProject(props) {
  const { project, visibility } = props;
  const name = project.name || "Patrick";
  const repository = project.repository || "http://www.google.com";
  const deployURL = project.deployUrl || "http://www.google.com";
  const imgURL = project.imgURL || patrickImg;
  const movieURL = project.movieURL || null;
  const desc = "desctiption";
  const tecnologies = project.tecnologies || [];

  return (
    <div className="card-project">
        <img className="iconClose" src={close} onClick={() => visibility("")} />
        <h3 className="title-project">{name}</h3>
        <div className="div-tecnologies">
          {tecnologies.map((e) => (
            <TecnologyIcon key={e.name} obj={e} />
          ))}
        </div>
        {!movieURL ? (
          <img
            className="main-image-card"
            src={`${project.imgURL || imgURL}`}
          />
        ) : (
          <PlayMovie
            className="movie"
            url={"http://www.youtube.com/embed/fuy-Eh8D1TU"}
          />
        )}

        <p className="description">{project.description || desc}</p>

        <section className="btns">
          <a
            className="code btn"
            href={project.repository || repository}
            target="_blank"
          >
            <span className="material-symbols-outlined">code</span>
            Código
          </a>
          <a
            className="view btn"
            /* href={project.deployURL || deployURL}
            target="_blank" */
            onClick={()=>alert('Essa visualização ainda será implementada! Volte em breve.')}
          >
            <span class="material-symbols-outlined">public</span>
            Deploy
          </a>
        </section>
      </div>
  );
}
