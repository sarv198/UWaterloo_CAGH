export default function Involvement() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="content-section text-center">
            <h1 className="display-4 mb-4">Get Involved with UW CAGH</h1>
            <p className="lead mb-4">
              Join our community of passionate individuals working to make a difference in global health.
              There are many ways to contribute, regardless of your background or experience level.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <h2 className="h3 text-primary mb-4">Ways to Get Involved</h2>

          <div className="content-section mb-4">
            <div className="row">
              <div className="col-md-2 text-center">
                <div className="bg-primary text-white rounded-circle p-3 d-inline-block">
                  <i className="bi bi-people fs-3"></i>
                </div>
              </div>
              <div className="col-md-10">
                <h4 className="text-primary">Become a Member</h4>
                <p>Join our growing community of students passionate about global health. Membership gives you access to:</p>
                <ul>
                  <li>Exclusive workshops and seminars</li>
                  <li>Networking opportunities with professionals</li>
                  <li>Priority registration for events</li>
                  <li>Access to research opportunities</li>
                  <li>Leadership development programs</li>
                </ul>
                <h5 className="text-primary mt-4 mb-3">Benefits</h5>
                <ul>
                  <li>Expand knowledge of global health through peer-to-peer exchange</li>
                  <li>Convene global health experts and learners through networking events</li>
                  <li>Foster cross-institutional collaboration</li>
                  <li>Engage with faculty members and get involved with global health research projects</li>
                  <li>Gain professional development skills through member-only services</li>
                </ul>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScz60uowWZjlmb_oL2c8LkBKh5I7VPf6S2b9Rk9NMuMafbHBA/viewform" target="_blank" rel="noreferrer" className="btn btn-primary">Join Now</a>
              </div>
            </div>
          </div>

          <div className="content-section mb-4">
            <div className="row">
              <div className="col-md-2 text-center">
                <div className="bg-success text-white rounded-circle p-3 d-inline-block">
                  <i className="bi bi-heart fs-3"></i>
                </div>
              </div>
              <div className="col-md-10">
                <h4 className="text-primary">Volunteer Opportunities</h4>
                <p>COMING SOON! FOLLOW US ON INSTAGRAM FOR UPDATES!</p>
              </div>
            </div>
          </div>

          <div className="content-section mb-4">
            <div className="row">
              <div className="col-md-2 text-center">
                <div className="bg-warning text-dark rounded-circle p-3 d-inline-block">
                  <i className="bi bi-mic fs-3"></i>
                </div>
              </div>
              <div className="col-md-10">
                <h4 className="text-primary">Voices for Global Health Podcast</h4>
                <p>Join our student-led podcast that explores various global health disparities by focusing on social determinants of health.</p>
                <p className="small">Our podcast covers diverse topics including:</p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="small">
                      <li>Forest fires and health impacts</li>
                      <li>Invisible disabilities awareness</li>
                      <li>Obesity and public health</li>
                      <li>Parental-child separation</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="small">
                      <li>Poverty and health outcomes</li>
                      <li>Lower back pain perspectives</li>
                      <li>Mental health advocacy</li>
                      <li>Environmental health issues</li>
                    </ul>
                  </div>
                </div>
                <p className="small text-muted"><strong>Get Involved:</strong> We&apos;re always looking for passionate students to join our podcast team!</p>
                <div className="d-flex gap-2 flex-wrap">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEKIzbXlAy2IpYuh_0cIsBeK_JbgsdpxCBrQKJzV9ydc-hzA/viewform" target="_blank" rel="noreferrer" className="btn btn-warning">
                    <i className="bi bi-person-plus me-2"></i>Join Our Podcast!
                  </a>
                  <a href="https://creators.spotify.com/pod/profile/uw-canadian-association-f/episodes/Episode-1---What-is-Voices-for-Global-Health-e2p2dbo" target="_blank" rel="noreferrer" className="btn btn-outline-warning">
                    <i className="bi bi-headphones me-2"></i>Listen to Our Podcast!
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section mb-4">
            <div className="row">
              <div className="col-md-2 text-center">
                <div className="bg-info text-white rounded-circle p-3 d-inline-block">
                  <i className="bi bi-people fs-3"></i>
                </div>
              </div>
              <div className="col-md-10">
                <h4 className="text-primary">Mentorship Program</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="content-section">
            <h3 className="h4 text-primary mb-3">Contact Us</h3>
            <div className="small">
              <p><strong>Email:</strong> uwcagh@uwaterloo.ca</p>
              <p><strong>Office Hours:</strong><br />Monday-Friday: 10:00 AM - 4:00 PM</p>
              <p><strong>Follow Us:</strong></p>
              <div className="d-flex gap-2">
                <a href="#" className="btn btn-sm btn-outline-primary">Facebook</a>
                <a href="#" className="btn btn-sm btn-outline-primary">Instagram</a>
                <a href="#" className="btn btn-sm btn-outline-primary">Twitter</a>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h3 className="h4 text-primary mb-3">Frequently Asked Questions</h3>
            <div className="accordion accordion-flush" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">Do I need a health background?</button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body small">No! We welcome students from all academic backgrounds. Global health is interdisciplinary and benefits from diverse perspectives.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">How much time is required?</button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body small">It&apos;s flexible! General members can participate as little or as much as they&apos;d like. Leadership positions require more commitment (5-10 hours/week).</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">Are there opportunities for travel?</button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body small">Yes! We organize study tours, conference attendance, and volunteer trips. These are typically available to active members who have been involved for at least one term.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
