import { newsSources } from '../data/newsSources'

export default function GlobalHealthNews() {
  return (
    <div className="news-hub">
      <header className="news-hub__hero content-section mb-4">
        <p className="news-hub__eyebrow mb-2">Stay informed</p>
        <h1 className="display-5 fw-semibold mb-3">Global health news sources</h1>
        <p className="lead mb-0 text-muted-custom">
          Trusted outlets, UN and WHO channels, journalism, and library guides to follow global health
          between meetings and classes.
        </p>
      </header>

      <ul className="row g-4 list-unstyled mb-0">
        {newsSources.map((src) => (
          <li key={src.id} className="col-12 col-md-6 col-xl-4">
            <article className="news-source-card h-100">
              <div className="news-source-card__top">
                <span className="news-source-card__tag">{src.tag}</span>
                <i className="bi bi-box-arrow-up-right news-source-card__icon" aria-hidden />
              </div>
              <h2 className="news-source-card__title h5">{src.title}</h2>
              <p className="news-source-card__desc">{src.description}</p>
              <a
                className="news-source-card__link"
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open website
                <span className="visually-hidden"> (opens in new tab)</span>
              </a>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
