import { memo } from 'react'

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? 'done' : ''}>{todo.text}</span>
      </label>
      <button
        type="button"
        className="delete-button"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  )
}

export default memo(TodoItem)
