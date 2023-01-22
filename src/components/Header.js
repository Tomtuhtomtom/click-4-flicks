import React, { Component } from 'react'
import tmdbLogo from '../assets/tmdb.svg'


export default class Header extends Component {
    render() {
        return (
            <div className='header-container'>
            <div className='header-placeholder'></div>
            <div className='header-title header-placeholder'>Click 4 Flicks</div>
            <div className='header-placeholder header-logo-box'>
                <div className='header-logo-item header-logo-title'>Powered by:</div>
                <img className='header-logo-item header-logo' src={tmdbLogo} width='40px'></img>
            </div>
            </div>
        )
    }
}
