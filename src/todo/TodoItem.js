import PropTypes from "prop-types";

function TodoItem({ item, index }) {
 
  const closeItem = (id) => {
    console.log(id);
  };
  return (
    <li className="todo__item">
      {`${index + 1} ${item.title} `}
      <span className="todo__close" onClick={() => closeItem(item.id)}>
        &#10006;
      </span>
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
