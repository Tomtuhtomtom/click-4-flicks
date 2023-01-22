import React, { Component, useEffect } from 'react';
import { Results } from './Results';
import { useState } from 'react';
import axios from 'axios';


export default function Search() {
    const myAPIKey = 'e9d5cddd9429f125b2cd26271121c66a';
    const [title, setTitle] = useState('');
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${myAPIKey}&query=${title}`;
    const [movies, setMovies] = useState({});
    const [total, setTotal] = useState('');
    const [updated, setUpdated] = useState(title);
    const [ready, setReady] = useState(false);

    const handleSubmit = () => {
        setReady(true)
        setUpdated(title);
        axios.get(`${searchURL}`)
            .then(res => {
                setMovies(res.data.results)
                setTotal(res.data.total_results)
            })
    }

    const handleChange = event => {
        setTitle(event.target.value);
        handleSubmit();
    }

    const handleKeyDown = event => {
        if (event.keyCode === 13) {
            handleSubmit();
        }
    }

    return (
        <div className='search-container'>
                <input
                    className='search-input'
                    type='text'
                    name='title'
                    placeholder='Search for Movies by Title'
                    value={title}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    />
                <button className='search-button' onClick={handleSubmit}>Click 4 Flicks!</button>
            {ready ?
            <Results movies={movies} total={total}/>
            : ''}
        </div>
    );
}

