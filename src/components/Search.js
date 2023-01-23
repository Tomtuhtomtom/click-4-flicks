import React, { Component, useEffect } from 'react';
import { Results } from './Results';
import { useState } from 'react';
import axios from 'axios';


export default function Search() {
    const myAPIKey = process.env.REACT_APP_API_KEY;
    const [title, setTitle] = useState('');
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${myAPIKey}&query=${title}`;
    const searchURLWithPages = searchURL + '&page=';
    const [movies, setMovies] = useState({});
    const [total, setTotal] = useState('');
    const [updated, setUpdated] = useState(title);
    const [ready, setReady] = useState(false);

    const handleSubmit = () => {
        setReady(true);
        setUpdated(title);
        let allMovies = [];
        axios.get(`${searchURL}`)
            .then(res => {
                setTotal(res.data.total_results);
                allMovies = res.data.results;
                if(Number(res.data.total_pages) > 1) {
                for (let i = 1; i < Number(res.data.total_pages); i++){
                    axios.get(`${searchURLWithPages + (i + 1)}`)
                        .then(res => {
                            allMovies = allMovies.concat(res.data.results);
                            setMovies(allMovies);
                            })
                        };
                }
                else{
                    setMovies(allMovies);
                }
            });
    }

    const handleChange = event => {
        setTitle(event.target.value);
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
            <Results movies={movies} total={total} />
            : ''}
        </div>
    );
}
