import user from "./data/user.json"
import Container from "./components/Container/Container"
import Profile from "./components/Profile/Profile"
import Statistics from "./components/Statistical/Statistics"
import data from "./data/statistical.json"
import friends from "./data/friends.json"
import FriendList from "./components/FriendList/FriendList"
import transactions from "./data/transactions.json"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"

export default function App () {
  return <Container><Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  /> 
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    
    <FriendList friends={friends} />

    <TransactionHistory items={transactions} />;
 </Container>
  
 
};
