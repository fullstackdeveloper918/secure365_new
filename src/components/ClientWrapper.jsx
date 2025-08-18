
'use client';
import { useEffect, useState } from 'react';
import PreLoader from '@/components/preLoader';
import AnimationHeader from './animation_header';
import Login from '@/components/Login/page';
import { config } from '../../config';


export default function ClientWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [data, setData] = useState(null);
  console.log(data, 'qweqwefsd');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPreloader(false); // Hide preloader after 10 seconds
    }, 7000);
    return () => clearTimeout(timeout); // Clean up the timeout on component unmount
  }, []);
  console.log(showPreloader, 'showPreloader');
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      fetch(`${config.APP_URL}/secure-plugin/v1/home`, { cache: 'no-store' })
        .then((res) => {
          if (!res.ok) throw new Error(`Status ${res.status}`);
          return res.json();
        })
        .then((result) => {
          setData(result);
        })
        .catch((err) => {
          console.error('Error fetching home data:', err);
        });
    }
  }, []);
  const handleLoginSuccess = () => {
    localStorage.setItem('token', 'true');
    window.location.reload(); // triggers PreLoader again
  };
  console.log(showPreloader, 'showPreloader');
  // :exclamation: Show PreLoader once per refresh (and run only one loop)
  if (showPreloader) {
    return <PreLoader onComplete={() => setShowPreloader(false)} />;
  }
  if (!isLoggedIn) {
    return <Login onSuccess={handleLoginSuccess} />;
  }
  console.log(isLoggedIn, 'children');
  return (
    <>


      {isLoggedIn && <AnimationHeader />}
      {typeof children === 'function' ? children(data) : children}


    </>
  );
}