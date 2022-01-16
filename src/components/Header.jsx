import React from 'react';
import { ThemeContext } from '../Context/themeContext';
import { Switch } from '@headlessui/react';
import BeforeBG from '../images/header-before2.png';
import Logo from '../images/plugNmeet-logo.png';

const Header = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <header id='main-header' className='relative z-50 h-[60px] px-10 shadow-header flex items-center justify-between bg-white dark:bg-black overflow-hidden'>
            <img className='absolute top-[-145px] left-[-50px] pointer-events-none' src={BeforeBG} alt="BeforeBG" />
            <div className="logo relative z-20">
                <img src={Logo} alt="logo" />
            </div>
            <div className="middle relative z-20">
                <h2 className='text-base text-black leading-[1]'>Hugo Reedus’ Meeting Re: New Release Discussion </h2>
            </div>
            <div className="dark flex items-center relative z-20">
                <p className='text-sm text-black leading-[1] mr-1'>Dark mode</p>
                <Switch
                    checked={theme}
                    onChange={setTheme}
                    className={`${
                        theme ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex items-center h-6 rounded-full w-11`}
                    >
                    <span className="sr-only">Enable notifications</span>
                    <span
                        className={`${
                        theme ? 'translate-x-6' : 'translate-x-1'
                        } inline-block w-4 h-4 transform bg-white rounded-full`}
                    />
                </Switch>
            </div>
            <img className='absolute top-[-105px] right-[0px] w-[400px] rotate-[156deg] pointer-events-none' src={BeforeBG} alt="BeforeBG" />
        </header>
    );
}

export default Header;
