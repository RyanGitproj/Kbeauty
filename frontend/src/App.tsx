/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CoursesSection from './components/CoursesSection';
import Footer from './components/Footer';
import CourseDetail from './pages/CourseDetail';
import Boutique from './pages/Boutique';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
}

function HomeRoute({ searchQuery }: { searchQuery: string }) {
  return (
    <>
      <Hero />
      <CoursesSection searchQuery={searchQuery} />
    </>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeRoute searchQuery={searchQuery} />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
