import React from 'react';
const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const Participants = () => {
    return (
        <div className='participants-wrapper scrollBar absolute z-10 left-0 top-0 h-full w-[350px] pr-10 pl-6 pt-10 overflow-auto multi-gradient'>
            <div className="inner-wrapper relative z-20">
                <div className="close-btn fixed top-[50%] left-[320px] -translate-y-1/2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9.289" height="16.247" viewBox="0 0 9.289 16.247">
                        <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M14.314,17.736l6.143-6.148a1.156,1.156,0,0,1,1.64,0,1.171,1.171,0,0,1,0,1.645L15.136,20.2a1.159,1.159,0,0,1-1.6.034L6.526,13.237a1.161,1.161,0,1,1,1.64-1.645Z" transform="translate(20.536 -6.188) rotate(90)" fill="#004e91" opacity="0.52"/>
                    </svg>
                </div>
                <div className="top flex items-center justify-between font-medium mb-5">
                    <p className='text-lg text-black'>Participants (50)</p>
                    <p className='text-[15px] text-[#003767]'><span className='opacity-[.52]'>Show:</span> All</p>
                </div>
                <div className="all-participants-wrap">
                    {dummyData.map((data) => 
                        <li key={data} className='flex items-center justify-between mb-3'>
                            <div className="left flex items-center">
                                <div className="thumb h-[48px] w-[48px] mr-4 rounded-full overflow-hidden bg-[rgba(0,69,131)] flex items-center justify-center text-white text-sm">Kj</div>
                                <p className='text-[15px] text-[#003767]'>Kasey Jones</p>
                            </div>
                            <div className="right flex items-center">
                                <div className="hand mr-2 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19.683" height="21.323" viewBox="0 0 19.683 21.323">
                                        <g id="Group_35" data-name="Group 35" transform="translate(-796 -119)">
                                            <path id="Icon_ionic-md-hand" data-name="Icon ionic-md-hand" d="M22.569,13.744a1.657,1.657,0,0,0-2.41-.062l-1.984,1.983a.978.978,0,0,1-1.5.088c-.241-.284-.146-1.16-.078-1.716l1-8.179a1.334,1.334,0,1,0-2.647-.322l-1.1,6.424c-.057.16-.18.187-.194-.028l-.374-8.35a1.333,1.333,0,0,0-2.667,0L10.583,12c.007.1-.076.125-.091.014L9.306,5.443a1.334,1.334,0,1,0-2.624.474L7.738,13.6c0,.137-.045.215-.11.04L6.052,9.427a1.356,1.356,0,0,0-1.7-.851,1.379,1.379,0,0,0-.81,1.743L6.3,19.345c.014.05.03.1.045.148l.006.019,0,0a5.877,5.877,0,0,0,5.589,4.057,7.952,7.952,0,0,0,4.729-1.6h0c1.427-.859,6-5.776,6-5.776A1.7,1.7,0,0,0,22.569,13.744Z" transform="translate(792.538 116.75)" fill="#ffbd40"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="mic mr-2 cursor-pointer">
                                    <svg className='opacity-[.52]' xmlns="http://www.w3.org/2000/svg" width="8.722" height="12.686" viewBox="0 0 8.722 12.686">
                                        <path id="Icon_awesome-microphone" data-name="Icon awesome-microphone" d="M4.361,8.722A2.379,2.379,0,0,0,6.74,6.343V2.379a2.379,2.379,0,0,0-4.757,0V6.343A2.379,2.379,0,0,0,4.361,8.722ZM8.325,4.757h-.4a.4.4,0,0,0-.4.4V6.343A3.175,3.175,0,0,1,4.044,9.5,3.268,3.268,0,0,1,1.189,6.2V5.154a.4.4,0,0,0-.4-.4H.4a.4.4,0,0,0-.4.4v1a4.5,4.5,0,0,0,3.766,4.5V11.5H2.379a.4.4,0,0,0-.4.4v.4a.4.4,0,0,0,.4.4H6.343a.4.4,0,0,0,.4-.4v-.4a.4.4,0,0,0-.4-.4H4.956V10.66A4.365,4.365,0,0,0,8.722,6.343V5.154A.4.4,0,0,0,8.325,4.757Z" opacity="0.52"/>
                                    </svg>
                                </div>
                                <div className="option cursor-pointer">
                                    <svg className='opacity-[.52]' xmlns="http://www.w3.org/2000/svg" width="19" height="5" viewBox="0 0 19 5">
                                        <g id="Group_30" data-name="Group 30" transform="translate(-177 -693)" opacity="0.52">
                                            <circle id="Ellipse_20" data-name="Ellipse 20" cx="2.5" cy="2.5" r="2.5" transform="translate(177 693)" fill="#004e91"/>
                                            <circle id="Ellipse_21" data-name="Ellipse 21" cx="2.5" cy="2.5" r="2.5" transform="translate(184 693)" fill="#004e91"/>
                                            <circle id="Ellipse_22" data-name="Ellipse 22" cx="2.5" cy="2.5" r="2.5" transform="translate(191 693)" fill="#004e91"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </li>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Participants;
