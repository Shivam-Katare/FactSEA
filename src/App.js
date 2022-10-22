import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NhostClient, NhostReactProvider } from '@nhost/react';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/ProtectedRoutes';
import { NhostApolloProvider } from '@nhost/react-apollo';
import Facts from './pages/Facts/Facts';
import Quiz from './pages/Quiz/Quiz';
import Questions from './pages/Quiz/pages/Questions';
import FinalScreen from './pages/Quiz/pages/FinalScreen';
import FeaturedFactProperty from './pages/Dashboard/FeaturedFactProperty';
import LandingPage from './pages/Landing-Page/LandingPage';
import LoginPage from './components/LoginPage';
import Dashboard from './pages/Dashboard/Dashboard';
import LostPage from './components/LostPage';
import StrangeGallery from './pages/StrangeGallery/StrangeGallery';

const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
  region: process.env.REACT_APP_NHOST_REGION
})

function App() {
  return (
    <NhostReactProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <BrowserRouter>
          <Routes>
            <Route path='landing-page' element={<LandingPage />} />
            <Route path="explore" element={<LoginPage />} />
            <Route path="facts" element={<Facts />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path='questions' element={<Questions />} />
            <Route path='score' element={<FinalScreen />} />
            <Route path='strange' element={<StrangeGallery />} />
            <Route path="*" element={<LostPage />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Dashboard />
                <FeaturedFactProperty />
              </ProtectedRoute>
            }>
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster />
      </NhostApolloProvider>
    </NhostReactProvider>
  );
}
export default App;
