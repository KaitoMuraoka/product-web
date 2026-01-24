import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home/HomePage';
import { HashdPotatoPage } from './pages/HashdPotato/HashdPotatoPage';
import { MeetCuckooPage } from './pages/MeetCuckoo/MeetCuckooPage';
import { HashdPotatoPrivacyPage, MeetCuckooPrivacyPage } from './pages/Privacy/PrivacyPages';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hashdpotato" element={<HashdPotatoPage />} />
          <Route path="/meetcuckoo" element={<MeetCuckooPage />} />
          <Route path="/hashdpotato/privacy" element={<HashdPotatoPrivacyPage />} />
          <Route path="/meetcuckoo/privacy" element={<MeetCuckooPrivacyPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
