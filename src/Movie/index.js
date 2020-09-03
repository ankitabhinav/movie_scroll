import React from "react";
import MovieCard from './MovieCard'

const Movie = () => {
    return (
        <div style={{
            display: 'flex',
            overflowX: 'scroll', overflowY: 'hidden', paddingBottom:'30px',padding:'10px 0px 20px 0px'
        }}>
           
                <MovieCard imageLink='/movies/tenet.jpg' movieName='Tenet' />
                <MovieCard imageLink='/movies/joker.jpg' movieName='Joker' />
                <MovieCard imageLink='/movies/asharm.jpg' movieName='Asharam' />
                <MovieCard imageLink='/movies/inception.jpg' movieName='Inception' />
                <MovieCard imageLink='/movies/khuda_hafiz.jpg' movieName='Khuda Hafiz' />
                <MovieCard imageLink='/movies/knoves_out.jpg' movieName='Knoves Out' />
                <MovieCard imageLink='/movies/dark_knight.jpg' movieName='Dark Knight' />
                <MovieCard imageLink='/movies/tenet.jpg' movieName='Tenet' />
                <MovieCard imageLink='/movies/joker.jpg' movieName='Joker' />
                <MovieCard imageLink='/movies/asharm.jpg' movieName='Asharam' />
                <MovieCard imageLink='/movies/inception.jpg' movieName='Inception' />
                <MovieCard imageLink='/movies/khuda_hafiz.jpg' movieName='Khuda Hafiz' />
                <MovieCard imageLink='/movies/knoves_out.jpg' movieName='Knoves Out' />
                <MovieCard imageLink='/movies/dark_knight.jpg' movieName='Dark Knight' />
            

        </div>
    )
}

export default Movie;