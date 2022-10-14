import React from "react";
export function Movies({movies}) {
    return <div style={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
        {movies.length ? movies.map(movie => <Movie key={movie.id} {...movie} />): 'No results'}
    </div>
}

export class Movie extends React.PureComponent{
    render() {
        return <article className="movie-banner">
            <h3>{this.props.title}</h3>
        </article>
    }
}

export default Movies