// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
 
      <Link to={`/${movie.id}`}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
      </Link>
   
  );

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export const Poster = styled.img`
opacity: .5;
transition: .2s;

&:hover {
  opacity: 1;
  transition: .2s;
  box-shadow: 0 0 35px black;
}
`
