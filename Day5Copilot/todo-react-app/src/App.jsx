import { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
import todoService from './services/todoService'
import ProjectCrud from './features/projects/ProjectCrud'
import TodoItem from './components/TodoItem'

const blockedWords = ['spam', 'hack', 'xxx']

function App() {
  const [todos, setTodos] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      task: '',
    },
    mode: 'onSubmit',
  })

  useEffect(() => {
    const loadInitialTodos = async () => {
      try {
        const loadedTodos = await todoService.loadTodos()
        setTodos(loadedTodos)
      } catch {
        setErrorMessage('Unable to load todos right now.')
      }
    }

    loadInitialTodos()
  }, [])

  const normalizedTodoTextSet = useMemo(
    () => new Set(todos.map((todo) => todo.text.toLowerCase())),
    [todos],
  )

  const handleAddTodo = useCallback(async (formData) => {
    const trimmedTask = formData.task.trim()

    try {
      const nextTodos = await todoService.addTodo(todos, trimmedTask)
      setTodos(nextTodos)
      reset()
      setErrorMessage('')
      setSuccessMessage('Task added successfully.')
    } catch {
      setErrorMessage('Unable to add todo. Please try again.')
      setSuccessMessage('')
    }
  }, [reset, todos])

  const handleToggleTodo = useCallback(async (id) => {
    try {
      const nextTodos = await todoService.toggleTodo(todos, id)
      setTodos(nextTodos)
      setErrorMessage('')
      setSuccessMessage('')
    } catch {
      setErrorMessage('Unable to update todo right now.')
    }
  }, [todos])

  const handleDeleteTodo = useCallback(async (id) => {
    try {
      const nextTodos = await todoService.deleteTodo(todos, id)
      setTodos(nextTodos)
      setErrorMessage('')
      setSuccessMessage('')
    } catch {
      setErrorMessage('Unable to delete todo right now.')
    }
  }, [todos])

  const handleClearCompleted = useCallback(async () => {
    try {
      const nextTodos = await todoService.clearCompleted(todos)
      setTodos(nextTodos)
      setErrorMessage('')
      setSuccessMessage('')
    } catch {
      setErrorMessage('Unable to clear completed todos right now.')
    }
  }, [todos])

  const activeCount = useMemo(
    () => todos.filter((todo) => !todo.completed).length,
    [todos],
  )

  return (
    <main className="todo-app">
      <h1>Todo List</h1>
      {errorMessage ? <p className="error-text">{errorMessage}</p> : null}
      {successMessage ? <p className="success-text">{successMessage}</p> : null}

      <form className="todo-form" onSubmit={handleSubmit(handleAddTodo)}>
        <input
          type="text"
          placeholder="Add a new task"
          {...register('task', {
            required: 'Task is required.',
            minLength: {
              value: 3,
              message: 'Task must be at least 3 characters.',
            },
            maxLength: {
              value: 80,
              message: 'Task cannot exceed 80 characters.',
            },
            validate: {
              meaningfulText: (value) =>
                /[a-zA-Z]/.test(value) || 'Task must include letters.',
              blockedWords: (value) => {
                const lower = value.toLowerCase()
                return (
                  !blockedWords.some((word) => lower.includes(word)) ||
                  'Task contains restricted words.'
                )
              },
              noDuplicate: (value) => {
                const normalized = value.trim().toLowerCase()
                return (
                  !normalizedTodoTextSet.has(normalized) ||
                  'Task already exists.'
                )
              },
            },
          })}
          aria-label="Add a new task"
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Adding...' : 'Add'}
        </button>
      </form>
      {errors.task ? <p className="field-error">{errors.task.message}</p> : null}

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>

      <footer className="todo-footer">
        <p>{activeCount} task(s) left</p>
        <button type="button" onClick={handleClearCompleted}>
          Clear completed
        </button>
      </footer>

      <ProjectCrud />
    </main>
  )
}

export default App
