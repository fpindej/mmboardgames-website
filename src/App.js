import './styles/App.scss';
import ComingSoonPage from './components/pages/ComingSoonPage';

function App() {
  return (
    <div className="app-container">
      <section id="coming-soon">
        <ComingSoonPage />
      </section>
      <section id="coming-soon-2">
        <ComingSoonPage />
      </section>
    </div>
  );
}

export default App;
