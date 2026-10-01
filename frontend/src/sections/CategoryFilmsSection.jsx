import "../styles/category-films.css";

function CategoryFilmsSection({
  eyebrow,
  title,
  accent,
  description,
  films = [],
}) {
  return (
    <section className="category-films-section">
      <div className="container">

        <div className="category-films-header">
          <div>
            <p className="category-films-eyebrow">
              {eyebrow}
            </p>

            <h2>
              {title}
              <span>{accent}</span>
            </h2>
          </div>

          <p className="category-films-intro">
            {description}
          </p>
        </div>

        <div
          className={`category-films-grid ${
            films.length === 1 ? "category-films-single" : ""
          }`}
        >
          {films.map((film) => (
            <article
              className="category-film-card"
              key={film.title}
            >
              <div className="category-film-media">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={film.poster}
                >
                  <source
                    src={film.video}
                    type="video/mp4"
                  />
                </video>
              </div>

              <div className="category-film-content">
                <p>{film.label}</p>
                <h3>{film.title}</h3>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategoryFilmsSection;
