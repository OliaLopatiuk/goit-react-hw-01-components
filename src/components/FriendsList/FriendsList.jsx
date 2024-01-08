import PropTypes from "prop-types";
import {FriendList, ListItem, Avatar, Online, NotOnline} from './FriendsList.styled'

export const FriendsList = ({friends}) => (
    <FriendList>
        {friends.map(friend => <ListItem key={friend.id}>
        {friend.isOnline? ( <Online></Online>): (<NotOnline></NotOnline>) }
  <Avatar className="avatar" src={friend.avatar} alt={friend.name} />
  <p className="name">{friend.name}</p>
  </ListItem>)}
    </FriendList> 
)

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    }))
}
