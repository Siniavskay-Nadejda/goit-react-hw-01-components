import user from "../user.json"
import Profile from "components/Profile"
export default function App () {
  return (<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  /> 
)
 
};
