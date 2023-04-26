import './styles/home.css';
import CardProject from './components/CardProject';
import projectsList from './data/projects';
import Profile from './components/Profile';
import { useState } from 'react';

function App() {
  const [projectOpened, setProjectOpened] = useState('');
  const [viewOthers, setViewOthers] = useState(true);

  const handlerVisibility = (name) => {
    setProjectOpened(name)
    setViewOthers(!viewOthers)
  }

  return (
    <div className='home'>
      <Profile view={viewOthers} />
      <strong className={viewOthers ? 'projTitle' : 'none'}>Projetos:</strong>
      <div className={viewOthers ? 'div-icons-home' : 'none'}>
        {projectsList
          .map((e) => (<div className='proj-icon-home' key={e.name} onClick={() => handlerVisibility(e.name)}>
            <img src={e.projIco} />
            <h6>{e.name}</h6>
          </div>))}
          {projectsList
          .map((e) => (<div className='proj-icon-home' key={e.name} onClick={() => handlerVisibility(e.name)}>
            <img src={e.projIco} />
            <h6>{e.name}</h6>
          </div>))}
      </div>
      {projectsList.filter((i) => i.name === projectOpened)
        .map((e) => (<CardProject key={e.name} project={e} visibility={handlerVisibility} />))}
        <div className='buildind'>
          Em construção
        </div>
    </div>
  );
}

export default App;
