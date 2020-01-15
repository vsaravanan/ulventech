import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <ListGroup style={{ marginTop: 10, marginBottom: 10 }}>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        handleDelete={() => deleteTodo(todo.id) }

      />
    )}
  </ListGroup>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func
}

export default TodoList
