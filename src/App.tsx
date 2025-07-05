import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import InitialLoadingScreen from './components/InitialLoadingScreen';
import { Outlet } from 'react-router-dom';

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    console.log('App mounted');
    const timer = setTimeout(() => {
      console.log('Initial loading complete');
      setIsInitialLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoading) {
    return <InitialLoadingScreen />;
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </CartProvider>
  );
}

export default App;