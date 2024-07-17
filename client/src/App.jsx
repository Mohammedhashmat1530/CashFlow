import { useEffect, useState } from 'react'
import './App.css'
import { Header,Footer,LoadingScreen,} from './components/index'
import { useAuth } from "@clerk/clerk-react";
import { Outlet } from 'react-router-dom';
function App() {

  const [loading, setLoading] = useState(true);
  const { isLoaded } = useAuth()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoaded) {
        setLoading(false);
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [isLoaded]);

  if (loading) {
    return <>
      <Header />
      <LoadingScreen />
      <Footer />
    </>;
  }

  return (<>


    
    <Header />
    <Outlet />
    <Footer />
  </>
  )
}

export default App
