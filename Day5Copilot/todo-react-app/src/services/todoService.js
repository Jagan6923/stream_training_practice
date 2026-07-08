const STORAGE_KEY = 'todo.items'

const defaultTodos = [
  { id: 1, text: 'Set up React project', completed: true },
  { id: 2, text: 'Build todo component with useState', completed: false },
]

function parseTodos(rawValue) {
  if (!rawValue) {
    return defaultTodos
  }

  const parsed = JSON.parse(rawValue)
  return Array.isArray(parsed) ? parsed : defaultTodos
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

async function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const todos = parseTodos(raw)
    saveTodos(todos)
    return todos
  } catch {
    return defaultTodos
  }
}

async function addTodo(currentTodos, task) {
  const nextTodos = [
    ...currentTodos,
    {
      id: Date.now(),
      text: task.trim(),
      completed: false,
    },
  ]

  saveTodos(nextTodos)
  return nextTodos
}

async function toggleTodo(currentTodos, id) {
  const nextTodos = currentTodos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  )

  saveTodos(nextTodos)
  return nextTodos
}

async function deleteTodo(currentTodos, id) {
  const nextTodos = currentTodos.filter((todo) => todo.id !== id)
  saveTodos(nextTodos)
  return nextTodos
}

async function clearCompleted(currentTodos) {
  const nextTodos = currentTodos.filter((todo) => !todo.completed)
  saveTodos(nextTodos)
  return nextTodos
}

const todoService = {
  loadTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  clearCompleted,
}

export default todoService
