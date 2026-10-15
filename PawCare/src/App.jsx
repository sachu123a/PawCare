import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme/theme';
import AdminLayout from './layouts/AdminLayout';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Animals from './pages/Animals';
import AddAnimal from './pages/AddAnimal';
import AnimalDetails from './pages/AnimalDetails';
import EditAnimal from './pages/EditAnimal';
import Adopters from './pages/Adopters';
import AdoptionRequests from './pages/AdoptionRequests';
import MedicalRecords from './pages/MedicalRecords';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* Public / Standalone Auth Route (Hides sidebar & navbar) */}
          <Route path="/login" element={<Login />} />

          {/* Root Redirect to Dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Protected / Admin Layout Routes */}
          <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Animals Routes: Notice specific routes (add, edit) are placed to avoid conflict */}
            <Route path="/animals" element={<Animals />} />
            <Route path="/animals/add" element={<AddAnimal />} />
            <Route path="/animals/edit/:id" element={<EditAnimal />} />
            <Route path="/animals/:id" element={<AnimalDetails />} />

            {/* Shelter Management Modules */}
            <Route path="/adopters" element={<Adopters />} />
            <Route path="/adoption-requests" element={<AdoptionRequests />} />
            <Route path="/medical-records" element={<MedicalRecords />} />

            {/* 404 Catch-All Route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
