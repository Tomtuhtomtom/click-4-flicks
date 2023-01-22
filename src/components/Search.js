import React, { Component, useEffect } from 'react';
import { Results } from './Results';
import { useState } from 'react';
import axios from 'axios';


export default function Search() {
    const myAPIKey = 'e9d5cddd9429f125b2cd26271121c66a'
    const [title, setTitle] = useState('');
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${myAPIKey}&query=${title}`;
    const [movies, setMovies] = useState({})
    const [updated, setUpdated] = useState(title);
    const [ready, setReady] = useState(false)

    const handleSubmit = () => {
        setReady(true)
        setUpdated(title);
        axios.get(`${searchURL}`)
            .then(res => {
                setMovies(res.data.results)
            })
    }

    const handleChange = event => {
        setTitle(event.target.value);
        handleSubmit();
    }

    return (
        <>
        <div>Search</div>
        <input
            type='text'
            name='title'
            placeholder='Search for Movies'
            value={title}
            onChange={handleChange}
            />
        <button onClick={handleSubmit}>Search</button>
        {ready ?
        <Results movies={movies}/>
        : ''}
        </>
    );
}

