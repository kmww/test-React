import PropTypes from "prop-types";

const Board = ({ articles }) => {
  return (
    <ul>
      {articles.map(({ id, title }) => (
        <li key={id}>
          {id} | {title}
        </li>
      ))}
    </ul>
  );
};

Board.propTypes = {
  articles: PropTypes.array,
};

export default Board;
