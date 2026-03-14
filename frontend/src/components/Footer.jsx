export default function Footer() {
  return (
    <div className="container-fluid bg-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center text-primary mb-4">Connect With Us</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="content-section text-center h-100" style={{ background: 'linear-gradient(135deg, #E91E63, #F8BBD9)', borderColor: '#E91E63' }}>
              <i className="bi bi-instagram fs-1 text-white mb-3"></i>
              <h5 className="text-white mb-2">Follow Us on Instagram</h5>
              <p className="text-white mb-3">@cagh_uw</p>
              <a href="https://instagram.com/cagh_uw" target="_blank" rel="noreferrer" className="btn btn-light">
                <i className="bi bi-instagram me-2"></i>Follow Us
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="content-section text-center h-100" style={{ background: 'linear-gradient(135deg, #1DB954, #1ed760)', borderColor: '#1DB954' }}>
              <i className="bi bi-spotify fs-1 text-white mb-3"></i>
              <h5 className="text-white mb-2">Listen to Our Podcast</h5>
              <p className="text-white mb-3">UW CAGH - Voices for Global Health</p>
              <a href="https://creators.spotify.com/pod/profile/uw-canadian-association-f/episodes/Episode-1---What-is-Voices-for-Global-Health-e2p2dbo" target="_blank" rel="noreferrer" className="btn btn-light">
                <i className="bi bi-spotify me-2"></i>Listen Now
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="content-section text-center h-100" style={{ background: 'linear-gradient(135deg, #2196F3, #64B5F6)', borderColor: '#2196F3' }}>
              <i className="bi bi-envelope fs-1 text-white mb-3"></i>
              <h5 className="text-white mb-2">Join Our Mailing List</h5>
              <p className="text-white mb-3">Stay updated with our latest news</p>
              <a href="mailto:uwcagh@gmail.com" className="btn btn-light">
                <i className="bi bi-envelope me-2"></i>Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
