import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

export const Results = ({movies}) => {

    if(movies.length > 0){
    return (
        <>
        <div>Results</div>
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <Movie
                        title={movie.title}
                        />
                </div>
            ))}
        </div>
        </>
        );
    }
    else{
        return (
            <div>No Results</div>
        )
    }
}


    const Movie = ({ title }) => {
        return (
            <>
            <div>{title}</div>
            </>
        )
    }
