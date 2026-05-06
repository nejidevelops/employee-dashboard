import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Activity from './pages/Activity';
import Scorecard from './pages/Scorecard';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import TrophyRoom from './pages/TrophyRoom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="activity" element={<Activity />} />
          <Route path="scorecard" element={<Scorecard />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="trophy-room" element={<TrophyRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
