import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import { Contact } from 'lucide-react';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      {/* Add more routes here */}
    </Routes>
  );
}