import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import WholesaleTerms from './pages/WholesaleTerms';
import InitialLoadingScreen from './components/InitialLoadingScreen';

// Define the future config type explicitly
interface RouterFutureConfig {
  v7_startTransition: boolean;
  v7_relativeSplatPath: boolean;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'contact', element: <Contact /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-of-service', element: <TermsOfService /> },
      { path: 'wholesale-terms', element: <WholesaleTerms /> },
    ],
  },
], {
  basename: '/Sree_Krishna_Agencies',
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  } as RouterFutureConfig // Type assertion here
});

export function Router() {
  return <RouterProvider router={router} />;
}