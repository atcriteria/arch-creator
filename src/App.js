import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ArmorForm from './components/ArmorForm';
import WeaponForm from './components/WeaponForm';

function App() {
  return (
    <div className="App">
      <Header />
      <WeaponForm />
      <Footer />
    </div>
  );
}

export default App;
