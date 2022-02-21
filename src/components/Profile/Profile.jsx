import PropTypes from 'prop-types'
import s from "./Profile.module.css"

export default function Profile({ username, avatar, tag, location, stats }) {
  return (<div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt={username}
        width="320"
        className={s.avatar}
      />
      <p className={s.name}>{username}</p>
      <p className={s.tag}>{tag}</p>
      <p className={s.location}>{location}</p>
    </div>

    <ul className={s.stats}>
      <li className={s.item}>
        <span className={s.label}>followers</span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>views</span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>likes</span>
        <span className={s.quantity}>{stats.likes}</span>
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