function GenreToggle({genres, active, setActive}) {
    return (
        <ul className="genre-wrapper" style={{listStyle: "none", display: "flex", gap: "10px", flexWrap: "wrap"}}>
            {genres.map(genre =>
                <li
                    key={genre.replace(" ", "")}
                    onClick={() => setActive(genre)}
                    style={{
                        fontWeight: genre === active ? 'bold' : 'normal',
                        cursor: 'pointer'
                }}
                >
                    {genre}
                </li>
            )}
        </ul>
    );
}

export default GenreToggle;