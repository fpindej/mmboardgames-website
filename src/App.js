import './styles/App.scss';
import ComingSoonPage from './components/pages/ComingSoonPage';
import Navbar from './components/ui/Navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <section id="newsletter">
        <ComingSoonPage />
      </section>

      <section id="about-us">
        <ComingSoonPage />
      </section>

      <section id="about-us2">
        <ComingSoonPage />
      </section>
      
    </div>
  );
}

export default App;
