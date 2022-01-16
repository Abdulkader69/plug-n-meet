import React, { useState, useEffect} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeProvider } from '../src/Context/themeContext';
import Participants from './components/Participants';
import AppBG from '../src/images/app-banner.jpg';
import JoinPopUp from './components/JoinPopUp';
import MessageModule from './components/MessageModule';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [openJoinAudioPopUp, setOpenJoinAudioPopUp] = useState(false);

  const handleJoinAudioPopUp = () => {
    setOpenJoinAudioPopUp(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, []);
  return (
    <ThemeProvider>
      <div className={`loader ${loading ? 'opacity-1' : 'opacity-0 pointer-events-none'} fixed top-0 left-0 w-full h-full bg-white/90 z-[999] flex items-center justify-center`}>
        <div className="lds-ripple"><div></div><div></div></div>
      </div>
      <div className='plugNmeet-app'>
        <Header />
        <div className="plugNmeet-app-main-area h-[calc(100vh-130px)] overflow-hidden relative flex">
          <img className='absolute w-full h-full left-0 top-0 object-cover pointer-events-none' src={AppBG} alt="AppBG" />
          <div className="inner">
            <Participants />
            <MessageModule />
          </div>
        </div>
        <Footer handleJoinAudioPopUp={handleJoinAudioPopUp} />
        <JoinPopUp openJoinAudioPopUp={openJoinAudioPopUp} handleJoinAudioPopUp={handleJoinAudioPopUp} />
      </div>
    </ThemeProvider>
  );
}

export default App;