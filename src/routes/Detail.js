import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedMovie from "../components/DetailedMovie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const response = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(response.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  });

  return (
    <div>
      <h1>Details of selected movie</h1>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <div>
          <DetailedMovie
            title={movie.title}
            title_english={movie.title_english}
            key={movie.id}
            coverImage={movie.large_cover_image}
            rating={movie.rating}
            summary={movie.description_full}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
