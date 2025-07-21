import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import Docs from '@/app/docs';
import Home from '@/app/home';
import { ThemeProvider } from '@/components/common/theme-provider';

import '@/styles/index.css';

const router = createBrowserRouter([
  {
    path: '/docs/*',
    element: <Docs />,
  },
  {
    path: '/',
    element: <Home />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
router.navigate(window.location.href.split('?currentRoute=')[1]);
