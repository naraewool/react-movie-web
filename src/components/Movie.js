import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//여기서 Movie()로 전달되는 props는 객체임
function Movie({ id, title, coverImage, summary, genres }) {
  return (
    // <div key={id}> 여기서 왜 id 사용하지 않고 map()사용하는 파일에서 key 사용
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={coverImage} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
