import React, { Component, useState, useEffect } from 'react';

export const Results = ({movies, total}) => {

    if(movies.length > 0){
    return (
        <>
        <div className='results-found'>{total} Flicks Found:</div>
        <div className='results-container'>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <Movie
                        title={movie.title}
                        poster={movie.poster_path}
                        date={movie.release_date}
                        />
                </div>
            ))}
        </div>
        </>
        );
    }
    else{
        return (
            <div className='no-results'>No Flicks Found...</div>
        )
    }
}


    const Movie = ({ title, poster, date }) => {
        const posterPath = `https://image.tmdb.org/t/p/original${poster}`;
        const year = new Date(date).getFullYear();
        return (
            <div className='results-box'>
                <img className='results-image' src={posterPath} height='120px'></img>
                <div className='results-title-and-date'>
                    <div className='results-title'>{title}</div>
                    <div className='results-date'>({year})</div>
                </div>
            </div>
        )
    }

