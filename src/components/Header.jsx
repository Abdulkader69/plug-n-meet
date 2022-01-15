import React, {useState} from 'react';
import { ThemeContext } from '../Context/themeContext';
import { Switch } from '@headlessui/react';
import BeforeBG from '../images/header-before2.png';

const Header = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <header id='main-header' className='relative z-50 h-[70px] px-14 shadow-header flex items-center justify-between bg-white dark:bg-black overflow-hidden'>
            <img className='absolute top-[-145px] left-[-50px] pointer-events-none' src={BeforeBG} alt="BeforeBG" />
            <div className="logo relative z-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="104" height="20" viewBox="0 0 104 20">
                    <g id="Group_94" data-name="Group 94" transform="translate(-87 -43)">
                        <text id="plugNmeet" transform="translate(139 58)" fill="#004d90" fontSize="20" fontFamily="SofiaPro-Black, Sofia Pro" fontWeight="800"><tspan x="-51.22" y="0">plug</tspan><tspan y="0" fill="#24aef7">N</tspan><tspan y="0">meet</tspan></text>
                    </g>
                </svg>
            </div>
            <div className="middle relative z-20">
                <h2 className='text-xl text-black leading-[1]'>Hugo Reedus’ Meeting Re: New Release Discussion </h2>
            </div>
            <div className="dark flex items-center relative z-20">
                <p className='text-lg text-black leading-[1] mr-1'>Dark mode</p>
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
