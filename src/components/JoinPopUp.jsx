import React from 'react';

const JoinPopUp = ({openJoinAudioPopUp}) => {
    return (
        <div className={`${openJoinAudioPopUp ? 'opacity-1 pointer-events-auto' : 'pointer-events-none opacity-0'} join-the-audio-popup fixed transition ease-in top-0 left-0 w-full h-full z-[999] bg-white/80 px-6 flex items-center justify-center`}>
            <div className="popup-inner bg-white w-full max-w-sm rounded-3xl shadow-header relative px-6 py-14">
                <button className="close-btn absolute top-8 right-6 w-[25px] h-[25px]" type='button'>
                    <span className='inline-block h-[1px] w-[20px] bg-[#004D90] absolute top-0 left-0 rotate-45'></span>
                    <span className='inline-block h-[1px] w-[20px] bg-[#004D90] absolute top-0 left-0 -rotate-45'></span>
                </button>
                <p className='text-base text-[#004D90] font-normal mb-5 text-center'>How would you like to join the audio</p>
                <div className="btn flex justify-center">
                    <button type='button' className="microphone bg-transparent mr-4 text-center">
                        <div className="camera h-[40px] w-[40px] m-auto overflow-hidden rounded-full bg-[#F2F2F2] hover:bg-[#ECF4FF] mb-1 flex items-center justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 8.722 12.686">
                                <path id="Icon_awesome-microphone" data-name="Icon awesome-microphone" d="M4.361,8.722A2.379,2.379,0,0,0,6.74,6.343V2.379a2.379,2.379,0,0,0-4.757,0V6.343A2.379,2.379,0,0,0,4.361,8.722ZM8.325,4.757h-.4a.4.4,0,0,0-.4.4V6.343A3.175,3.175,0,0,1,4.044,9.5,3.268,3.268,0,0,1,1.189,6.2V5.154a.4.4,0,0,0-.4-.4H.4a.4.4,0,0,0-.4.4v1a4.5,4.5,0,0,0,3.766,4.5V11.5H2.379a.4.4,0,0,0-.4.4v.4a.4.4,0,0,0,.4.4H6.343a.4.4,0,0,0,.4-.4v-.4a.4.4,0,0,0-.4-.4H4.956V10.66A4.365,4.365,0,0,0,8.722,6.343V5.154A.4.4,0,0,0,8.325,4.757Z" opacity="0.52"/>
                            </svg>
                        </div>
                        <p className='text-sm text-[#004D90] font-normal'>Microphone</p>
                    </button>
                    <button type='button' className="headphone bg-transparent ml-4 text-center">
                        <div className="camera h-[40px] w-[40px] m-auto overflow-hidden rounded-full bg-[#F2F2F2] hover:bg-[#ECF4FF] mb-1 flex items-center justify-center cursor-pointer">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 442.176 442.176">
                                <path d="M401.271,223.514c-3.108-96.73-82.715-174.475-180.188-174.475c-97.474,0-177.083,77.744-180.189,174.486
                                    C16.243,240.205,0,268.436,0,300.391c0,51.139,41.607,92.745,92.749,92.745c6.212,0,11.248-5.029,11.248-11.244V218.881
                                    c0-6.204-5.036-11.244-11.248-11.244c-9.972,0-19.556,1.625-28.559,4.543c8.592-78.971,75.668-140.652,156.892-140.652
                                    c81.227,0,148.3,61.682,156.891,140.652c-9.002-2.918-18.586-4.543-28.551-4.543c-6.209,0-11.244,5.04-11.244,11.244v163.012
                                    c0,6.215,5.035,11.244,11.244,11.244c51.146,0,92.754-41.606,92.754-92.744C442.175,268.436,425.925,240.205,401.271,223.514z
                                    M81.503,369.748c-33.418-5.392-59.016-34.45-59.016-69.355c0-34.921,25.598-63.965,59.016-69.367V369.748z M360.666,369.748
                                    V231.025c33.415,5.402,59.017,34.446,59.017,69.367C419.683,335.298,394.081,364.357,360.666,369.748z"/>
                            </svg>
                        </div>
                        <p className='text-sm text-[#004D90] font-normal'>Listen only</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default JoinPopUp;
