import './App.css';
import { Pets, NavBar, Footer, PetProfile } from './ui-components';
function App() {
  const navbarOverrides = {
    'image': {
      src: 'https://trephax.com/assets/Trephax/img/Logo_Icon_Black.svg',
    },
    'Add Pet': {
      style: {
        cursor: 'pointer',
      },
      onClick: () => {
        alert('Hello');
      },
    },
  };
  return (
    <div className="App">
      <header className="App-header">
        <NavBar width={'100%'} overrides={navbarOverrides} />
        <Pets />
        {/* <PetProfile overrides={petProfileOverride} /> */}
        <Footer width={'100%'} />
      </header>
    </div>
  );
}

export default App;
