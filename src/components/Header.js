import React, { Component } from 'react'
import tmdbLogo from '../assets/tmdb.svg'


export default class Header extends Component {
    render() {
        return (
            <div className='header-container'>
            <div className='header-placeholder'></div>
            <div className='header-title header-placeholder'><a className='header-link' href='/'>Click 4 Flicks</a></div>
            <div className='header-placeholder header-logo-box'>
                <div className='header-logo-item header-logo-title'>Powered by:</div>
                <a href='https://www.themoviedb.org/?language=en-US'><img className='header-logo-item header-logo' src={tmdbLogo} width='40px'></img></a>
            </div>
            </div>
        )
    }
}
