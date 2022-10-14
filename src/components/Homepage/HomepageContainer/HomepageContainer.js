import React from "react";
import movies from "../../../testMovies.json"
import {HomepageComponent} from "../HomepageComponent/HomepageComponent";

export class HomepageContainer extends React.Component {
    static ALL_GENRES = "ALL"

    constructor(props) {
        super(props)
        this.state = {
            movies: movies,
            activeGenre: HomepageContainer.ALL_GENRES,
            activeSearch: "",
            searchInput: ""
        }
    }

    setActiveGenre = (genre) => this.setState({activeGenre: genre})

    setSearchInput = (search) => this.setState({searchInput: search})

    onSearchSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => ({...prevState, activeSearch: prevState.searchInput}))
    }

    getGenres = (movies) => {
        const genreSet = movies.reduce((genres, movie) => {
            movie.genres.forEach(genres.add, genres)
            return genres
        }, new Set([
            HomepageContainer.ALL_GENRES,
        ]))
        if(this.state.activeGenre) {
            genreSet.add(this.state.activeGenre)
        }
        return [...genreSet]
    }

    genresFilter = (movie) => {
        if(this.state.activeGenre === HomepageContainer.ALL_GENRES) {
          return true
        }
        return movie.genres.includes(this.state.activeGenre)
    }


    render() {
        const moviesWithSearch =  movies
            .filter(movie => movie.title.toLowerCase().includes(this.state.activeSearch))
        return (
            <HomepageComponent
                movies={moviesWithSearch.filter(movie => this.genresFilter(movie))}
                genres={this.getGenres(moviesWithSearch)}
                onSearchSubmit={this.onSearchSubmit}
                onSearchInputChange={e => this.setSearchInput(e.target.value)}
                searchInput={this.state.searchInput}
                active={this.state.activeGenre}
                setActive={this.setActiveGenre}
            />
        );
    }
}