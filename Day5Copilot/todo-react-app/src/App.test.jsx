import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import App from './App'
import todoService from './services/todoService'

vi.mock('./services/todoService', () => ({
  default: {
    loadTodos: vi.fn(),
    addTodo: vi.fn(),
    toggleTodo: vi.fn(),
    deleteTodo: vi.fn(),
    clearCompleted: vi.fn(),
  },
}))

const initialTodos = [
  { id: 1, text: 'Learn testing', completed: false },
  { id: 2, text: 'Ship feature', completed: true },
]

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    todoService.loadTodos.mockResolvedValue(initialTodos)
    todoService.addTodo.mockResolvedValue([
      ...initialTodos,
      { id: 3, text: 'New valid task', completed: false },
    ])
    todoService.toggleTodo.mockResolvedValue([
      { id: 1, text: 'Learn testing', completed: true },
      initialTodos[1],
    ])
    todoService.deleteTodo.mockResolvedValue([initialTodos[1]])
    todoService.clearCompleted.mockResolvedValue([initialTodos[0]])
  })

  it('renders loaded todos and active count', async () => {
    render(<App />)

    expect(await screen.findByText('Learn testing')).toBeInTheDocument()
    expect(screen.getByText('Ship feature')).toBeInTheDocument()
    expect(screen.getByText('1 task(s) left')).toBeInTheDocument()
  })

  it('shows error when loading todos fails', async () => {
    todoService.loadTodos.mockRejectedValueOnce(new Error('load failed'))
    render(<App />)

    expect(await screen.findByText('Unable to load todos right now.')).toBeInTheDocument()
  })

  it('validates required field', async () => {
    const user = userEvent.setup()
    render(<App />)

    await screen.findByText('Learn testing')
    await user.click(screen.getByRole('button', { name: 'Add' }))

    expect(await screen.findByText('Task is required.')).toBeInTheDocument()
    expect(todoService.addTodo).not.toHaveBeenCalled()
  })

  it('validates minimum length', async () => {
    const user = userEvent.setup()
    render(<App />)

    await screen.findByText('Learn testing')
    await user.type(screen.getByLabelText('Add a new task'), 'ab')
    await user.click(screen.getByRole('button', { name: 'Add' }))

    expect(await screen.findByText('Task must be at least 3 characters.')).toBeInTheDocument()
    expect(todoService.addTodo).not.toHaveBeenCalled()
  })

  it('validates blocked words', async () => {
    const user = userEvent.setup()
    render(<App />)

    await screen.findByText('Learn testing')
    await user.type(screen.getByLabelText('Add a new task'), 'hack this thing')
    await user.click(screen.getByRole('button', { name: 'Add' }))

    expect(await screen.findByText('Task contains restricted words.')).toBeInTheDocument()
    expect(todoService.addTodo).not.toHaveBeenCalled()
  })

  it('validates duplicate tasks', async () => {
    const user = userEvent.setup()
    render(<App />)

    await screen.findByText('Learn testing')
    await user.type(screen.getByLabelText('Add a new task'), 'learn testing')
    await user.click(screen.getByRole('button', { name: 'Add' }))

    expect(await screen.findByText('Task already exists.')).toBeInTheDocument()
    expect(todoService.addTodo).not.toHaveBeenCalled()
  })

  it('adds a task with trimmed text and shows success', async () => {
    const user = userEvent.setup()
    render(<App />)

    await screen.findByText('Learn testing')
    const input = screen.getByLabelText('Add a new task')
    await user.type(input, '  New valid task  ')
    await user.click(screen.getByRole('button', { name: 'Add' }))

    await waitFor(() => {
      expect(todoService.addTodo).toHaveBeenCalledWith(initialTodos, 'New valid task')
    })
    expect(await screen.findByText('Task added successfully.')).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  it('shows add error when service fails', async () => {
    const user = userEvent.setup()
    todoService.addTodo.mockRejectedValueOnce(new Error('add failed'))

    render(<App />)
    await screen.findByText('Learn testing')

    await user.type(screen.getByLabelText('Add a new task'), 'Another task')
    await user.click(screen.getByRole('button', { name: 'Add' }))

    expect(await screen.findByText('Unable to add todo. Please try again.')).toBeInTheDocument()
  })

  it('toggles a todo when checkbox is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await screen.findByText('Learn testing')
    await user.click(screen.getByRole('checkbox', { name: 'Learn testing' }))

    expect(todoService.toggleTodo).toHaveBeenCalledWith(initialTodos, 1)
  })

  it('deletes a todo when delete is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await screen.findByText('Learn testing')
    const deleteButtons = screen.getAllByRole('button', { name: 'Delete' })
    await user.click(deleteButtons[0])

    expect(todoService.deleteTodo).toHaveBeenCalledWith(initialTodos, 1)
  })

  it('clears completed todos', async () => {
    const user = userEvent.setup()
    render(<App />)

    await screen.findByText('Learn testing')
    await user.click(screen.getByRole('button', { name: 'Clear completed' }))

    expect(todoService.clearCompleted).toHaveBeenCalledWith(initialTodos)
  })
})
