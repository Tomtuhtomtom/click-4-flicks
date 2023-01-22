import React, { Component, useEffect } from 'react';
import { Results } from './Results';
import { useState } from 'react';
import axios from 'axios';


export default function Search() {
    const myAPIKey = process.env.REACT_APP_API_KEY;
    const [title, setTitle] = useState('');
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${myAPIKey}&query=${title}`;
    const searchURLWithPages = searchURL + '&page='
    const [movies, setMovies] = useState({});
    const [total, setTotal] = useState('');
    const [pages, setPages] = useState('');
    const [updated, setUpdated] = useState(title);
    const [ready, setReady] = useState(false);

    const handleSubmit = () => {
        setReady(true);
        setUpdated(title);
        axios.get(`${searchURL}`)
            .then(res => {
                setMovies(res.data.results);
                setTotal(res.data.total_results);
                setPages(res.data.total_pages);
            })
    }

    const handleSubmitWithPages = (searchURL) => {
        // axios.get(`${searchURL}`)
        //     .then(res => {
        //         setMovies(res.data.results);
        //         setTotal(res.data.total_results);
        //         setPages(res.data.total_pages);
        //     })
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
            <Results movies={movies} total={total} pages={pages}/>
            : ''}
            {ready ?    
            <Pages
                pages={pages}
                searchURL={searchURLWithPages}
                handleSubmitWithPages={handleSubmitWithPages}
            />
            : ''}
        </div>
    );
}

const Pages = ({pages, searchURL, handleSubmitWithPages}) => {
    let pageLinks = [];
    for (let i = 1; i <= Number(pages); i++) {
        searchURL = searchURL + i
        pageLinks.push(<div className='pages-box'><a className='pages-link' onClick={handleSubmitWithPages(searchURL)} href=''>{i}</a></div>)
        searchURL = searchURL.slice(0, -1)
    }
    return (
        <>
        <div className='pages-found'>Pages:</div>
        <div className='pages-container'>{pageLinks}</div>
        </>
    )
}