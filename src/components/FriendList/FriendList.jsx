import PropTypes from 'prop-types'
import s from "./FriendList.module.css"
import FriendListItem from "../FriendListItem/FriendListItem"

export default function FriendList({ friends }) {
    return <ul className={s['friend-list']}>
        {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />))}
   </ul>
  }

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};