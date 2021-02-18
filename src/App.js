import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const { // movies.data.data.movies
      data: {  
        data: {movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"); 
    this.setState({ movies, isLoading: false });    
  };

  // 첫 렌더 후 할 행동
  componentDidMount() { 
    this.getMovies();  
  }

  render() {    
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading 
        ? <div className="loader">
          <span className="loader__text">Loading...</span>
        </div> 
        : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.large_cover_image}
              genres={movie.genres}
              key={movie.id}
              />
            ))}
          </div>
          )
        }
            
      </section>
    );
  }
}

export default App;
