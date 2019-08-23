/* eslint react/destructuring-assignment: 0 */

import React, { Component } from 'react';

import styled from 'styled-components'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w92'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

class MovieDetail extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=bb29de75c651cdf6c148e7e7b6d5adac&language=en`,
      );
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
      const { movie } = this.state;
    return (
        
        <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title}>
            <Opacity>
            <DetailHeader>
                <PosterDetail src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
                    <Details>                
                        <Meta>
                            <h2>{movie.title}</h2>
                            <h2>{movie.release_date}</h2>
                        </Meta>
                        <Overview>
                        <p>{movie.overview}</p>
                        </Overview>
                    </Details>
            </DetailHeader>
        </Opacity>
        </MovieWrapper>
        )
    }
}

export default MovieDetail


const Opacity = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100%;
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
background-image: linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,1));
`

const MovieWrapper = styled.div`
position: relative;
background: url(${props => props.backdrop}) no-repeat;
background-size: cover;
height: 50vh;

@media (min-width: 768px) {
    height: 100vh;

}
`



const DetailHeader = styled.div`
position: relative;
display: flex;
top: 5vh;
left: 0;
`

const PosterDetail = styled.img`
 box-shadow: 0 0 20px black;
 height: 200px;
`

const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
color: white;
width: 50vw;
margin-left: 1rem;
`

const Meta = styled.div`
display:flex;
justify-content: space-between;
font-size: 1rem;

`



const Overview = styled.div`
font-size: 1rem;`