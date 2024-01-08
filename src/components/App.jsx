import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions'
import {Profile} from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import {FriendsList} from './FriendsList/FriendsList'
import {TransactionHistory} from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <div>
 <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics stats={data}>Upload stats</Statistics>
<FriendsList friends={friends} />
<TransactionHistory items={transactions}/>
    </div>
  );
};
