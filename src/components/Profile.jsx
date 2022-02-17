import PropTypes from 'prop-types'
export default function Profile({ username, avatar, tag, location, stats }) {
  return   (<div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt={username}
        width="320"
        className="avatar"
      />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>)
}
Profile.propTypes = {
    username: PropTypes.string.isRequired,  
    avatar: PropTypes.string,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats:PropTypes.objectOf(PropTypes.number).isRequired
    
    
}