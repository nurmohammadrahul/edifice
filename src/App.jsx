import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/Router';
import DarkModeToggle from './components/common/DarkModeToggle';
function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Router>
        <AppRouter />
        <DarkModeToggle />
      </Router>
    </div>
  );
}

export default App;