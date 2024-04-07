import { Profile } from "./Profile/Profile";
import friends from './FriendList/friends.json';
import { FriendList } from "./FriendList/Friends";
import user from "./Profile/user.json"
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data.json"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from './TransactionHistory/transactions.json'

export const App = () => {
  return (
    <>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}></Profile>
      
      <Statistics title="Upload stats" status={data}></Statistics>

      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>  
    </>)};

