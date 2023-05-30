function DetailedMovie({ title, coverImage, rating, summary }) {
  return (
    <div>
      <h2>
        {title} ({rating})
      </h2>
      <img src={coverImage} alt={title} />
      <p>{summary}</p>
    </div>
  );
}

export default DetailedMovie;
