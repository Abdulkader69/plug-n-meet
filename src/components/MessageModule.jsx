import React from 'react';
import Avatar from '../images/avatar.jpg'

const MessageModule = () => {
    return (
        <div className='MessageModule-wrapper scrollBar absolute z-10 right-0 top-0 h-[calc(100%-10rem)] w-[300px] px-4 pt-5 overflow-auto multi-gradient'>
            <div className="inner-wrapper relative z-20">
                <div className="close-btn fixed top-5 left-[240px] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9.289" height="16.247" viewBox="0 0 9.289 16.247">
                        <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M14.314,17.736l6.143-6.148a1.156,1.156,0,0,1,1.64,0,1.171,1.171,0,0,1,0,1.645L15.136,20.2a1.159,1.159,0,0,1-1.6.034L6.526,13.237a1.161,1.161,0,1,1,1.64-1.645Z" transform="translate(20.536 -6.188) rotate(90)" fill="#004e91" opacity="0.52"/>
                    </svg>
                </div>
                <div className="all-MessageModule-wrap">

                    <div className="message-item mb-3">
                        <div className="wrapper flex ">
                            <div className="avatar flex h-8 w-8 overflow-hidden rounded-full shadow-header bg-[#004E91]">
                                <img className='w-full h-full object-cover' src={Avatar} alt="avatar" />
                            </div>
                            <div className="content w-[calc(100%-2rem)] pt-2">
                                <p className="name pl-2 text-base pb-1">Anna Davis</p>
                                <p className='message-content max-w-fit bg-white shadow-footer text-sm'>Looks like the gang’s all here yay! What’s new?</p>
                            </div>
                        </div>
                    </div>
                    <div className="message-item mb-3">
                        <div className="wrapper flex ">
                            <div className="avatar flex items-center justify-center h-8 w-8 overflow-hidden rounded-full shadow-header text-white bg-[#004E91]">
                                {/* <img className='w-full h-full object-cover' src={Avatar} alt="avatar" /> */}
                                p
                            </div>
                            <div className="content w-[calc(100%-2rem)] pt-2">
                                <p className="name pl-2 text-base pb-1">Anna Davis</p>
                                <p className='message-content max-w-fit bg-white shadow-footer text-sm'>Looks like the gang’s all here yay! What’s new?</p>
                            </div>
                        </div>
                    </div>
                    <div className="message-item mb-3">
                        <div className="wrapper flex ">
                            <div className="avatar flex h-8 w-8 overflow-hidden rounded-full shadow-header bg-[#004E91]">
                                <img className='w-full h-full object-cover' src={Avatar} alt="avatar" />
                            </div>
                            <div className="content w-[calc(100%-2rem)] pt-2">
                                <p className="name pl-2 text-base pb-1">Anna Davis</p>
                                <p className='message-content max-w-fit bg-white shadow-footer text-sm'>Looks like the gang’s all here yay! What’s new?</p>
                            </div>
                        </div>
                    </div>
                    <div className="message-item me mb-3">
                        <div className="wrapper flex ">
                            <div className="content w-[calc(100%-2rem)] pt-2">
                                <p className="name pl-2 text-base pb-1">You</p>
                                <p className='message-content max-w-fit bg-white shadow-footer text-sm'>What’s new?</p>
                            </div>
                        </div>
                    </div>
                    <div className="message-item mb-3">
                        <div className="wrapper flex ">
                            <div className="avatar flex h-8 w-8 overflow-hidden rounded-full shadow-header bg-[#004E91]">
                                <img className='w-full h-full object-cover' src={Avatar} alt="avatar" />
                            </div>
                            <div className="content w-[calc(100%-2rem)] pt-2">
                                <p className="name pl-2 text-base pb-1">Anna Davis</p>
                                <p className='message-content max-w-fit bg-white shadow-footer text-sm'>Looks like the gang’s all here yay! What’s new?</p>
                            </div>
                        </div>
                    </div>
                    <div className="message-item mb-3">
                        <div className="wrapper flex ">
                            <div className="avatar flex h-8 w-8 overflow-hidden rounded-full shadow-header bg-[#004E91]">
                                <img className='w-full h-full object-cover' src={Avatar} alt="avatar" />
                            </div>
                            <div className="content w-[calc(100%-2rem)] pt-2">
                                <p className="name pl-2 text-base pb-1">Anna Davis</p>
                                <p className='message-content max-w-fit bg-white shadow-footer text-sm'>Looks like the gang’s all here yay! What’s new?</p>
                            </div>
                        </div>
                    </div>
                    <div className="message-item me mb-3">
                        <div className="wrapper flex ">
                            <div className="content w-[calc(100%-2rem)] pt-2">
                                <p className="name pl-2 text-base pb-1">You</p>
                                <p className='message-content max-w-fit bg-white shadow-footer text-sm'>Looks like the gang’s</p>
                            </div>
                        </div>
                    </div>
                    <div className="message-item mb-3">
                        <div className="wrapper flex ">
                            <div className="avatar flex h-8 w-8 overflow-hidden rounded-full shadow-header bg-[#004E91]">
                                <img className='w-full h-full object-cover' src={Avatar} alt="avatar" />
                            </div>
                            <div className="content w-[calc(100%-2rem)] pt-2">
                                <p className="name pl-2 text-base pb-1">Anna Davis</p>
                                <p className='message-content max-w-fit bg-white shadow-footer text-sm'>Looks like the gang’s all here yay! What’s new?</p>
                            </div>
                        </div>
                    </div>
                    <div className="message-item me mb-3">
                        <div className="wrapper flex ">
                            <div className="content w-[calc(100%-2rem)] pt-2">
                                <p className="name pl-2 text-base pb-1">You</p>
                                <p className='message-content max-w-fit bg-white shadow-footer text-sm'>Looks like the gang’s all here</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="message-form p-8 h-40 fixed bottom-[70px] right-0 bg-white">
                    <form>
                        <div className="top">
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26.998" height="26.995" viewBox="0 0 26.998 26.995">
                                    <path id="Icon_ionic-ios-send" data-name="Icon ionic-ios-send" d="M30.649,4.563,4.838,15.813a.592.592,0,0,0,.021,1.076l6.982,3.945a1.126,1.126,0,0,0,1.287-.127L26.895,8.838c.091-.077.309-.225.394-.141s-.049.3-.127.394L15.251,22.507a1.122,1.122,0,0,0-.113,1.343L19.7,31.17a.594.594,0,0,0,1.069-.014L31.444,5.344A.592.592,0,0,0,30.649,4.563Z" transform="translate(-4.503 -4.503)" fill="#004e91"/>
                                </svg>
                            </button>
                        </div>
                        <textarea name="message-textarea" id="message-textarea" className='w-full'></textarea>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MessageModule;
