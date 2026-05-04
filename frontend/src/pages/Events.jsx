import { Link } from 'react-router-dom'

const base = import.meta.env.BASE_URL
const cookieImg = `${base}images/events/cookie-fundraiser-event.png`
const panelImg = `${base}images/events/healthcare-panellist-event.png`

export default function Events() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="content-section">
            <h1 className="display-4 text-center mb-4">Our Events</h1>
            <p className="lead text-center mb-5">
              Explore our past events and stay tuned for upcoming opportunities to engage with global health initiatives.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <h2 className="h3 text-primary mb-4">Previous Events</h2>

          <div className="content-section mb-4">
            <div className="row align-items-center g-3">
              <div className="col-md-4 col-lg-3">
                <div className="event-thumb-wrap">
                  <img
                    src={cookieImg}
                    alt="Cookie fundraiser promotional graphic with chocolate chip cookies"
                    className="event-thumb"
                    width={480}
                    height={360}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="col-md-8 col-lg-9">
                <h4 className="text-primary">Cookie Fundraiser</h4>
                <p>Proceeds go to local charity</p>
                <p className="small text-muted"><strong>Ex.</strong> Adventure For Change</p>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-light text-dark">Fundraising</span>
                  <span className="badge bg-light text-dark">Local Charity</span>
                  <span className="badge bg-light text-dark">Community Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section mb-4">
            <div className="row align-items-center g-3">
              <div className="col-md-4 col-lg-3">
                <div className="event-thumb-wrap">
                  <img
                    src={panelImg}
                    alt="Healthcare panellist event — three speaker portraits"
                    className="event-thumb"
                    width={480}
                    height={360}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="col-md-8 col-lg-9">
                <h4 className="text-primary">Healthcare Panellist Event</h4>
                <p>Professionals and upper year students share career experiences and networking opportunities</p>
                <p>Undergraduate students gain insights and practical advice on securing research positions</p>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-light text-dark">Career Development</span>
                  <span className="badge bg-light text-dark">Networking</span>
                  <span className="badge bg-light text-dark">Research Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="content-section">
            <h3 className="h4 text-primary mb-3">Upcoming Events</h3>
            <div className="alert alert-info">
              <h5 className="alert-heading">Stay Tuned!</h5>
              <p className="mb-0">We&apos;re planning exciting events for the upcoming term. Follow our social media and check back here for updates!</p>
            </div>
          </div>

          <div className="content-section">
            <h3 className="h4 text-primary mb-3">Get Notified</h3>
            <p className="small text-muted">Want to be the first to know about our events?</p>
            <Link to="/involvement" className="btn btn-primary btn-sm">Join Our Mailing List</Link>
          </div>
        </div>
      </div>
    </>
  )
}
