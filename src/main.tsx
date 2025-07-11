import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import Docs from '@/app/docs';
import Home from '@/app/home';
import { ThemeProvider } from '@/components/common/theme-provider';

import '@/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={'/'}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/docs/*" element={<Docs />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
