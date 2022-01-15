import React, {useEffect, useState} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeProvider } from '../src/Context/themeContext';
import Participants from './components/Participants';
import AppBG from '../src/images/app-banner.jpg';

const App = () => {
  const { openParticipants, setOpenParticipants } = useState(false);
  const onClickOpenParticipant = () => {
    setOpenParticipants(true);
  }
  console.log(openParticipants);
  return (
    <ThemeProvider>
      <div className='plugNmeet-app'>
        <Header />
        <div className="plugNmeet-app-main-area h-[calc(100vh-160px)] overflow-hidden relative flex">
          <img className='absolute w-full h-full left-0 top-0 object-cover pointer-events-none' src={AppBG} alt="AppBG" />
          <div className="inner">
            <Participants openParticipants={openParticipants} />
          </div>
        </div>
        <Footer openParticipants={openParticipants} onClickOpenParticipant={onClickOpenParticipant} />
      </div>
    </ThemeProvider>
  );
}

export default App;