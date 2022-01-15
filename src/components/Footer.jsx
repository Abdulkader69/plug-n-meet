import React from 'react';

const Footer = ({openParticipants, onClickOpenParticipant}) => {
    return (
        <footer id='main-footer' className='h-[90px] px-14 shadow-footer flex items-center justify-between'>
            <div className="footer-inner flex items-center justify-between w-full">

                <div className='footer-left flex items-center'>
                    <div className="camera h-[60px] w-[60px] overflow-hidden rounded-full bg-[#F2F2F2] hover:bg-[#ECF4FF] mr-6 flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 31.772 25.416">
                            <path id="Icon_awesome-video-slash" data-name="Icon awesome-video-slash" d="M31.466,22.743l-2.731-2.11a1.564,1.564,0,0,0,1.45-1.544V6.33a1.591,1.591,0,0,0-2.5-1.281L22.242,8.8v6.811l-1.589-1.226V5.551A2.373,2.373,0,0,0,18.28,3.178H6.152L2.259.169A.8.8,0,0,0,1.142.308L.169,1.559A.791.791,0,0,0,.308,2.672l1.812,1.4L15.874,14.7l4.779,3.7,8.862,6.851a.8.8,0,0,0,1.117-.139l.973-1.256a.787.787,0,0,0-.139-1.112ZM1.589,19.869a2.373,2.373,0,0,0,2.373,2.373H18.28a2.356,2.356,0,0,0,1.47-.521L1.589,7.681Z" transform="translate(-0.002 -0.002)" fill="#004e91"/>
                        </svg>
                    </div>
                    <div className="microphone h-[60px] w-[60px] overflow-hidden rounded-full bg-[#F2F2F2] hover:bg-[#ECF4FF] mr-6 flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 32.675 26.141">
                            <path id="Icon_awesome-microphone-slash" data-name="Icon awesome-microphone-slash" d="M32.36,23.388,24.3,17.162a8.773,8.773,0,0,0,1.02-4.092V10.62a.817.817,0,0,0-.817-.817H23.69a.817.817,0,0,0-.817.817V13.07a6.35,6.35,0,0,1-.547,2.563L20.97,14.585a4.807,4.807,0,0,0,.27-1.515V4.9a4.9,4.9,0,1,0-9.8,0V7.217L2.322.172A.817.817,0,0,0,1.175.316l-1,1.29A.817.817,0,0,0,.316,2.752L30.354,25.968a.817.817,0,0,0,1.147-.143l1-1.29a.817.817,0,0,0-.144-1.146Zm-11.938.3H17.563V21.966a8.89,8.89,0,0,0,1.719-.424l-2.558-1.977a6.583,6.583,0,0,1-1.039.01,6.612,6.612,0,0,1-5.676-5.2L7.352,12.32v.35a9.267,9.267,0,0,0,7.76,9.276V23.69H12.253a.817.817,0,0,0-.817.817v.817a.817.817,0,0,0,.817.817h8.169a.817.817,0,0,0,.817-.817v-.817A.817.817,0,0,0,20.422,23.69Z" transform="translate(0)" fill="#004d90"/>
                        </svg>
                        {/* <svg className='' xmlns="http://www.w3.org/2000/svg" width="32" height="26" viewBox="0 0 8.722 12.686">
                            <path id="Icon_awesome-microphone" data-name="Icon awesome-microphone" d="M4.361,8.722A2.379,2.379,0,0,0,6.74,6.343V2.379a2.379,2.379,0,0,0-4.757,0V6.343A2.379,2.379,0,0,0,4.361,8.722ZM8.325,4.757h-.4a.4.4,0,0,0-.4.4V6.343A3.175,3.175,0,0,1,4.044,9.5,3.268,3.268,0,0,1,1.189,6.2V5.154a.4.4,0,0,0-.4-.4H.4a.4.4,0,0,0-.4.4v1a4.5,4.5,0,0,0,3.766,4.5V11.5H2.379a.4.4,0,0,0-.4.4v.4a.4.4,0,0,0,.4.4H6.343a.4.4,0,0,0,.4-.4v-.4a.4.4,0,0,0-.4-.4H4.956V10.66A4.365,4.365,0,0,0,8.722,6.343V5.154A.4.4,0,0,0,8.325,4.757Z"/>
                        </svg> */}
                    </div>
                </div>

                <div className='footer-middle flex items-center'>
                    <div className="message h-[60px] w-[60px] overflow-hidden rounded-full bg-[#F2F2F2] hover:bg-[#ECF4FF] mr-6 flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25.339 25.339">
                            <path id="Icon_material-message" data-name="Icon material-message" d="M25.805,3H5.534A2.531,2.531,0,0,0,3.013,5.534L3,28.339l5.068-5.068H25.805a2.541,2.541,0,0,0,2.534-2.534V5.534A2.541,2.541,0,0,0,25.805,3ZM23.271,18.2H8.068V15.67h15.2Zm0-3.8H8.068V11.869h15.2Zm0-3.8H8.068V8.068h15.2Z" transform="translate(-3 -3)" fill="#004d90"/>
                        </svg>
                    </div>
                    <div 
                        className={`${openParticipants ? 'asdsa' : ''} participants h-[60px] w-[60px] overflow-hidden rounded-full bg-[#F2F2F2] hover:bg-[#ECF4FF] mr-6 flex items-center justify-center cursor-pointer`}
                        onClick={onClickOpenParticipant}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 26.063 23.167">
                            <path id="Icon_metro-users" data-name="Icon metro-users" d="M19.947,22.577V21.383A6.467,6.467,0,0,0,22.843,16c0-3.6,0-6.516-4.344-6.516S14.155,12.4,14.155,16a6.467,6.467,0,0,0,2.9,5.381v1.194c-4.912.4-8.688,2.815-8.688,5.733H28.635c0-2.918-3.776-5.331-8.688-5.733Zm-9.973.559a13.756,13.756,0,0,1,4.52-1.819,8.168,8.168,0,0,1-.916-1.335A8.291,8.291,0,0,1,12.526,16a12.856,12.856,0,0,1,.692-5.289,4.714,4.714,0,0,1,3.6-2.7c-.383-1.73-1.4-2.868-4.114-2.868-4.344,0-4.344,2.917-4.344,6.516a6.467,6.467,0,0,0,2.9,5.381v1.194c-4.912.4-8.688,2.815-8.688,5.733H8.884a9.274,9.274,0,0,1,1.09-.83Z" transform="translate(-2.571 -5.143)" fill="#004d90"/>
                        </svg>
                    </div>
                    <div className="hands h-[60px] w-[60px] overflow-hidden rounded-full bg-[#F2F2F2] hover:bg-[#ECF4FF] mr-6 flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 24.559 26.606">
                            <path id="Icon_ionic-md-hand" data-name="Icon ionic-md-hand" d="M27.3,16.592a2.067,2.067,0,0,0-3.007-.078L21.82,18.989a1.22,1.22,0,0,1-1.875.11c-.3-.354-.182-1.448-.1-2.141L21.089,6.752a1.665,1.665,0,1,0-3.3-.4l-1.37,8.016c-.072.2-.225.234-.242-.035L15.708,3.913a1.664,1.664,0,0,0-3.327,0l-.033,10.5c.009.121-.1.156-.114.017l-1.48-8.194a1.664,1.664,0,1,0-3.275.591L8.8,16.413c0,.171-.056.268-.137.049L6.694,11.206a1.692,1.692,0,0,0-2.125-1.062,1.72,1.72,0,0,0-1.011,2.175L7,23.58c.018.062.037.124.057.185l.007.023,0,.005a7.333,7.333,0,0,0,6.974,5.062,9.923,9.923,0,0,0,5.9-2h0c1.781-1.072,7.487-7.207,7.487-7.207A2.127,2.127,0,0,0,27.3,16.592Z" transform="translate(-3.462 -2.25)" fill="#004d90"/>
                        </svg>
                    </div>
                    <div className="share-screen h-[60px] w-[60px] overflow-hidden rounded-full bg-[#F2F2F2] hover:bg-[#ECF4FF] mr-6 flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 30.407 20.271">
                            <path id="Icon_material-screen-share" data-name="Icon material-screen-share" d="M25.339,23.737A2.531,2.531,0,0,0,27.86,21.2l.013-12.67A2.533,2.533,0,0,0,25.339,6H5.068A2.525,2.525,0,0,0,2.534,8.534V21.2a2.533,2.533,0,0,0,2.534,2.534H0v2.534H30.407V23.737ZM16.47,19.265V16.49c-3.522,0-5.841,1.077-7.6,3.446.709-3.383,2.673-6.753,7.6-7.437V9.8l5.068,4.726Z" transform="translate(0 -6)" fill="#004e91"/>
                        </svg>
                    </div>
                    <div className="record h-[60px] w-[60px] overflow-hidden rounded-full bg-[#F2F2F2] hover:bg-[#ECF4FF] mr-6 flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="17" viewBox="0 0 41 17">
                            <g id="Group_93" data-name="Group 93" transform="translate(-1335 -1036)">
                                <text id="Rec" transform="translate(1346 1048)" fill="#004e91" stroke="rgba(0,0,0,0)" strokeWidth="1" fontSize="15" fontFamily="SofiaPro-Black, Sofia Pro" fontWeight="800"><tspan x="0" y="0">REC</tspan></text>
                                <circle id="Ellipse_26" data-name="Ellipse 26" cx="5" cy="5" r="5" transform="translate(1335 1038)" fill="#004e91"/>
                            </g>
                        </svg>
                    </div>
                    <div className="menu h-[60px] w-[60px] overflow-hidden rounded-full bg-[#F2F2F2] hover:bg-[#ECF4FF] mr-6 flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="7" viewBox="0 0 29 7">
                            <g id="Group_52" data-name="Group 52" transform="translate(-177.719 -693.375)">
                                <circle id="Ellipse_20" data-name="Ellipse 20" cx="3.5" cy="3.5" r="3.5" transform="translate(177.719 693.375)" fill="#004d90"/>
                                <circle id="Ellipse_21" data-name="Ellipse 21" cx="3.5" cy="3.5" r="3.5" transform="translate(188.719 693.375)" fill="#004d90"/>
                                <circle id="Ellipse_22" data-name="Ellipse 22" cx="3.5" cy="3.5" r="3.5" transform="translate(199.719 693.375)" fill="#004d90"/>
                            </g>
                        </svg>
                    </div>
                </div>

                <div className='footer-right flex items-center'>
                    <div className="close-meeting h-[60px] w-[60px] overflow-hidden rounded-full bg-[#ED2139] mr-6 flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27.01" height="27.008" viewBox="0 0 27.01 27.008">
                            <path id="Icon_ionic-ios-call" data-name="Icon ionic-ios-call" d="M30.72,10.363a22.686,22.686,0,0,1-4.739,3.171c-1.42.682-1.941.668-2.946-.056-.837-.6-1.378-1.167-2.341-.956s-2.862,1.645-4.7,3.48-3.277,3.741-3.48,4.7.359,1.5.956,2.341c.724,1.005.745,1.526.056,2.946a22.238,22.238,0,0,1-3.171,4.739c-1.034,1.034-1.266.809-1.835.6a10.443,10.443,0,0,1-1.68-.893,5.069,5.069,0,0,1-2.018-2.13c-.4-.865-.865-2.475,1.5-6.68a37.272,37.272,0,0,1,6.553-8.74h0l.007-.007.007-.007h0a37.418,37.418,0,0,1,8.74-6.553c4.2-2.362,5.815-1.9,6.68-1.5a4.983,4.983,0,0,1,2.13,2.018,10.443,10.443,0,0,1,.893,1.68C31.528,9.1,31.76,9.329,30.72,10.363Z" transform="translate(-4.49 -4.502)" fill="#fff"/>
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
