import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <div className="content-section">
          <h1 className="display-4 text-center mb-4">About UW CAGH</h1>
          <h2 className="h3 text-primary mb-3">Canadian Association for Global Health</h2>

          <p className="lead">
            The Canadian Association for Global Health (CAGH) is a vibrant network dedicated to advancing health equity and addressing the social determinants of health in Canada and worldwide. As a member-based, not-for-profit organization representing, and supported by, researchers, policymakers, and practitioners, CAGH aims to champion a positive change in global health through connecting like-minded individuals.
          </p>

          <p className="lead">
            As a student-led chapter at the University of Waterloo, we are committed to engage students in critical conversations, mobilize meaningful action on local global health initiatives, and create a supportive community through research, advocacy, and knowledge exchange.
          </p>

          <p className="lead">
            We invite all students to contribute, regardless of background, faculty, or level of expertise!
          </p>

          <h3 className="h4 text-primary mt-4 mb-3">Our Mission</h3>
          <p>
            We strive to create a platform where students can engage with global health issues, develop leadership skills, and contribute to meaningful change in communities worldwide. Through education, advocacy, and collaborative partnerships, we work to address health disparities and promote health equity globally.
          </p>

          <h3 className="h4 text-primary mt-4 mb-3">What We Do</h3>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i><strong>Educational Workshops:</strong> Host seminars and workshops on various global health topics</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i><strong>Community Outreach:</strong> Organize health awareness campaigns and community service projects</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i><strong>Research Initiatives:</strong> Support student research in global health areas</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i><strong>Networking Events:</strong> Connect students with professionals in global health</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i><strong>Fundraising:</strong> Raise funds for global health initiatives and organizations</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i><strong>Advocacy:</strong> Promote policy changes and raise awareness about global health issues</li>
              </ul>
            </div>
          </div>

          <h3 className="h4 text-primary mt-4 mb-3">Our Values</h3>
          <div className="row">
            <div className="col-md-4 text-center mb-3">
              <div className="p-3 border rounded">
                <h5 className="text-primary">Equity</h5>
                <p className="small">Promoting health equity and addressing disparities in healthcare access globally.</p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-3">
              <div className="p-3 border rounded">
                <h5 className="text-primary">Collaboration</h5>
                <p className="small">Working together with diverse communities and organizations to create lasting impact.</p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-3">
              <div className="p-3 border rounded">
                <h5 className="text-primary">Innovation</h5>
                <p className="small">Embracing innovative approaches to address complex global health challenges.</p>
              </div>
            </div>
          </div>

          <h3 className="h4 text-primary mt-4 mb-3">Join Our Community</h3>
          <p>
            Whether you&apos;re a student interested in global health, healthcare, international development, or simply want to make a difference in the world, UW CAGH welcomes you. We believe that everyone has a role to play in improving global health outcomes.
          </p>

          <div className="text-center mt-4">
            <Link to="/involvement" className="btn btn-primary btn-lg me-3">Get Involved</Link>
            <Link to="/team" className="btn btn-outline-primary btn-lg">Meet Our Team</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
