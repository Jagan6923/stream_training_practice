class LegacyTodoService {
  constructor() {
    this.storageKey = 'todo.items'
  }

  loadTodos(success, failure) {
    try {
      const raw = localStorage.getItem(this.storageKey)
      const parsed = raw ? JSON.parse(raw) : []
      success(parsed)
    } catch (error) {
      if (failure) {
        failure(error)
      }
    }
  }

  addTodo(items, text, callback) {
    const next = items
    next.push({
      id: Date.now(),
      text,
      completed: false,
    })

    localStorage.setItem(this.storageKey, JSON.stringify(next))
    callback(next)
  }
}

export default new LegacyTodoService()
