import PropTypes from "prop-types";
import {Container, Photo, UserName, Info, StatsList, StatLabel, StatData, StatsListItem} from './Profile.styled.jsx'
 
export const Profile = ({username, tag, location, avatar, stats}) => (
    <Container>
  <div>
    <Photo
      src={avatar}
      alt={username}
    />
    <UserName>{username}</UserName>
    <Info>@{tag}</Info>
    <Info>{location}</Info>
  </div>

  <StatsList>
    <StatsListItem>
      <StatLabel className="label">Followers</StatLabel>
      <StatData className="quantity">{stats.followers}</StatData>
    </StatsListItem>
    <StatsListItem>
      <StatLabel className="label">Views</StatLabel>
      <StatData className="quantity">{stats.views}</StatData>
    </StatsListItem>
    <StatsListItem>
      <StatLabel className="label">Likes</StatLabel>
      <StatData className="quantity">{stats.likes}</StatData>
    </StatsListItem>
  </StatsList>
</Container>
); 

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
      }),
}