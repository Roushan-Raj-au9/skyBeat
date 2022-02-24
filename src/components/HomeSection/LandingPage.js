import React from 'react';
import accessUrl from '../../config/loginUrl';
import './LandingPage.css';
import logo from '../../assets/logo.png';

const LandingPage = () => {
    return (
        <div className='row no-gutters' >
            <div className='col-md-6 no-gutters' >
                <div className='leftSide' >
                    <div className='logoC' >
                        <div className='logoWrapper' >
                            <img src={logo} alt='logoImage' className="img-fluid logoImage" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 no-gutters' >
                <div className='rightSide' >
                    <div className="rightContainer" >

                        <div className='heading' >
                            <h3>
                                YOU TELL <br />
                                THE STORY, <br />
                                WE SET <br />
                                THE TONE
                            </h3>

                            <a id="loginBox" href={`${accessUrl}`}>Login with skyBEAT</a>


                        </div>
                    </div>
                </div>
                <div className="animation-area">
                    <ul className="box-area">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;