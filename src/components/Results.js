import React, { Component, useState, useEffect } from 'react';

export const Results = ({movies, total, maxPerPage }) => {

    if(movies.length > 0){
    return (
        <>
        <Total 
            total={total}
            maxPerPage={maxPerPage}
            />
        <div className='results-container'>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <Movie
                        title={movie.title}
                        poster={movie.poster_path}
                        date={movie.release_date}
                        overview={movie.overview}
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


    const Movie = ({ title, poster, date, overview }) => {
        const posterPath = `https://image.tmdb.org/t/p/original${poster}`;
        const year = new Date(date).getFullYear();
        let slice = 130;
        if(title.length > 20){
            slice = 50;
        }
        let trail = '';
        if(overview.length > 200){
            trail = '...';
        }
        return (
            <div className='results-box'>
                <img className='results-image' src={posterPath} height='120px'></img>
                <div className='results-title-and-date'>
                    <div className='results-title'>{title}</div>
                    <div className='results-date'>({year})</div>
                    <div className='results-overview'>{overview.slice(0,slice)}{trail}</div>
                </div>
            </div>
        )
    }

    const Total = ({ total, maxPerPage }) => {
        if(total > maxPerPage){
            return (
                <>
                <div className='results-found'>{total} Flicks Found:</div>
                <div className='results-found-warning'>(Only showing {maxPerPage}, Consider narrowing search)</div>
                </>
            )
        }
        else{
            return (
                <div className='results-found'>{total} Flicks Found:</div>
            )
        }
    }

