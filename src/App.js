import './styles/home.css';
import CardProject from './components/CardProject';
import projectsList from './data/projects';
import Profile from './components/Profile';

function App() {
  return (
    <div className='home'>
      <Profile />
     {projectsList.map((e) => (<CardProject key={e.name} project={e} />))}
    </div>
  );
}

export default App;
