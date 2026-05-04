import { useState } from 'react'
import { newsSources } from '../data/newsSources'
import { siteFaviconUrl, sitePreviewUrl } from '../utils/sitePreview'

function NewsPreviewImage({ pageUrl, title }) {
  const [tier, setTier] = useState('preview')

  if (tier === 'none') {
    return (
      <div className="news-source-card__preview news-source-card__preview--fallback" aria-hidden>
        <span className="news-source-card__preview-letter">{title.charAt(0)}</span>
      </div>
    )
  }

  const src = tier === 'preview' ? sitePreviewUrl(pageUrl) : siteFaviconUrl(pageUrl)
  const imgClass =
    tier === 'preview' ? undefined : 'news-source-card__preview-img--contain'

  return (
    <div className="news-source-card__preview">
      <img
        className={imgClass}
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        onError={() => {
          if (tier === 'preview') setTier('favicon')
          else setTier('none')
        }}
      />
    </div>
  )
}

export default function GlobalHealthNews() {
  return (
    <div className="news-hub">
      <header className="news-hub__hero content-section mb-4">
        <p className="news-hub__eyebrow mb-2">Stay informed</p>
        <h1 className="display-5 fw-semibold mb-3">Global health news sources</h1>
        <p className="lead mb-0 text-muted-custom">
          Trusted outlets, UN and WHO channels, journalism, and library guides to follow global health
          between meetings and classes. Each card opens the site in a new tab.
        </p>
      </header>

      <ul className="row g-4 list-unstyled mb-0">
        {newsSources.map((src) => (
          <li key={src.id} className="col-12 col-md-6 col-xl-4">
            <a
              className="news-source-card"
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <NewsPreviewImage pageUrl={src.url} title={src.title} />
              <div className="news-source-card__body">
                <div className="news-source-card__top">
                  <span className="news-source-card__tag">{src.tag}</span>
                  <i className="bi bi-box-arrow-up-right news-source-card__icon" aria-hidden />
                </div>
                <h2 className="news-source-card__title h5">{src.title}</h2>
                <p className="news-source-card__desc">{src.description}</p>
                <span className="news-source-card__cta">
                  Open website
                  <span className="visually-hidden"> — {src.title} (opens in new tab)</span>
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
