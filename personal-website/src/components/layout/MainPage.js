import React, { Component } from 'react';
import './MainPage.scss';
import art from '../../assets/imgs/me.png';

export default class MainPage extends Component {
    render() {
        return (
            <div id="main" className="main-wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                            <div className="banner-content slide-in-blurred-left">
                                <h1>
                                    Hello! <span role="img" aria-label="Hand">👋</span>
                                </h1>
                                <p>
                                    My name is <b>Amar Jasarbasic</b> and I am a software engineer based in Ottawa, Canada. I am a <b>4th year student at the
                                    University of Ottawa</b> and am currently interning as a software engineering at Microsoft
                                    in Vancouver.
							    </p>
                                <button type="button" className="btn btn-outline-primary dark-blue">Send me a message <i className="fas fa-envelope mail-icon"></i></button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-6 slide-in-blurred-bottom ">
                            <img src={art} className='me' alt="loading..." />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
