import React, { Component } from 'react'
import tmdbLogo from '../assets/tmdb.svg'

export default class Header extends Component {
    render() {
        return (
            <>
            <div>This is the header</div>
            <div>Powered by:</div>
            <img src={tmdbLogo} width='40px'></img>
            </>
        )
    }
}
