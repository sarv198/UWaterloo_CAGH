import { teamMembers } from '../data/teamData'
import MemberCard from '../components/MemberCard'

export default function Team() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="content-section text-center">
            <h1 className="display-4 mb-4">Meet Our Team</h1>
            <p className="lead mb-4">
              Get to know the passionate individuals leading UW CAGH and working tirelessly to advance global health initiatives on campus and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <h2 className="h3 text-primary mb-4 text-center">Executive Team</h2>
        </div>
        {teamMembers.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </>
  )
}
