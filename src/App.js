import './styles/App.scss';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import AboutUsPage from './components/pages/AboutUsPage';
import ComingSoonPage from './components/pages/ComingSoonPage';

function App() {
  return (
    <div className="app">
        <section id="home-section">
          <HomePage />
        </section>

        <section id="about-game-section">
          <AboutPage />
        </section>

        <section id="about-us-section">
          <AboutUsPage />
        </section>

        <section id="coming-soon-section">
          <ComingSoonPage />
        </section>
    </div>
  );
}

export default App;
