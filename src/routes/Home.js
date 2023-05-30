import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h2>My movies</h2>
      {loading ? (
        <h1>'Loading...'</h1>
      ) : (
        <div>
          {movies.map((movie) => {
            return (
              <Movie
                //map()안에서 렌더링하려면 key 반드시 필요
                id={movie.id}
                key={movie.id}
                title={movie.title}
                coverImage={movie.medium_cover_image}
                summary={movie.summary}
                genres={movie.genres} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
