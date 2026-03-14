import { IMG_BASE } from '../data/teamData'

export default function MemberCard({ member }) {
  const size = member.size || 100
  return (
    <div className="col-lg-6 mb-4">
      <div className="content-section h-100">
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="mb-3">
              {member.image && (
                <img
                  src={IMG_BASE + member.image}
                  alt={member.name}
                  className="img-fluid"
                  style={{ width: size, height: size, objectFit: 'cover' }}
                  onError={(e) => e.target.style.display = 'none'}
                />
              )}
            </div>
            <h5 className="text-primary mt-3 mb-0">{member.name}</h5>
            <small className="text-muted">{member.role}</small>
          </div>
          <div className="col-md-8">
            <p className="small"><strong>Program:</strong> {member.program}</p>
            {member.bio && <p className="small">{member.bio}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
