import React from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Movies from "../../Movies/Movies";
import GenreToggle from "../../Filters/GenreToggle/GenreToggle";
import {Counter} from "../../Counter/Counter";
import CreateElementExample from "../../CreateElementExample/CreateElementExample";

export function HomepageComponent(
    {movies, genres, onSearchSubmit, onSearchInputChange, searchInput, active, setActive}
){
    return <div>
        <h1>Homepage</h1>
        <HomepageSearchForm
            onSearchSubmit={onSearchSubmit}
            onSearchInputChange={onSearchInputChange}
            searchInput={searchInput}/>
        <h2>Genres</h2>
        <GenreToggle genres={genres} active={active} setActive={setActive} />
        <h2>Movies</h2>
        <Movies movies={movies} />
        <Counter />
        <Counter count={5}/>
        <CreateElementExample />
    </div>
}

function HomepageSearchForm({onSearchSubmit, onSearchInputChange, searchInput}) {
    return <form onSubmit={onSearchSubmit} style={{display: "flex"}}>
        <Input placeholder="What do you want to watch?" onChange={onSearchInputChange} value={searchInput}/>
        <Button>Search</Button>
    </form>
}