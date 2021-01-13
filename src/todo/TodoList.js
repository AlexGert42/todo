import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const styles = {
  ul: {
    padding: "10px 20px",
  },
};

function TodoList(props) {
  return (
    <div className="todo">
      <ul style={styles.ul}>
        {props.todos.map((item, i) => {
          return <TodoItem item={item} index={i} key={item.id}/>;
        })}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
