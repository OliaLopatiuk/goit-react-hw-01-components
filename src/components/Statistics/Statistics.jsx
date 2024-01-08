import PropTypes from "prop-types";
import {Heading, Container, StatList, ListItem, StatType, StatData} from './Statistics.styled'

export const Statistics = ({children, stats}) => (
    <Container>
  <Heading>{children}</Heading>

  <StatList>
    {stats.map(data => <ListItem key={data.id} style={{backgroundColor: backgroundColor()}} >
      <StatType>{data.label} </StatType>
      <StatData>{data.percentage}%</StatData>
    </ListItem>)}
  </StatList>
</Container>
)

Statistics.propTypes = {
    children: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }))
}

function backgroundColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}