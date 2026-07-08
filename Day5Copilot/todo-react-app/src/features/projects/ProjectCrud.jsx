import { memo, useEffect, useMemo, useState } from 'react'
import projectGateway from './projectGateway'
import './ProjectCrud.css'

const initialForm = {
  name: '',
  owner: '',
  status: 'Planned',
}

function ProjectCrud() {
  const [projects, setProjects] = useState([])
  const [form, setForm] = useState(initialForm)
  const [editingId, setEditingId] = useState(null)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const loaded = await projectGateway.getProjects()
        setProjects(loaded)
      } catch (error) {
        setError(error.message || 'Could not load projects.')
      }
    }

    loadProjects()
  }, [])

  const isEditing = editingId !== null
  const actionLabel = useMemo(() => (isEditing ? 'Update Project' : 'Create Project'), [isEditing])

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const validate = () => {
    if (form.name.trim().length < 3) {
      return 'Project name must be at least 3 characters.'
    }

    if (form.owner.trim().length < 2) {
      return 'Owner name must be at least 2 characters.'
    }

    return ''
  }

  const resetForm = () => {
    setForm(initialForm)
    setEditingId(null)
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const validationMessage = validate()
    if (validationMessage) {
      setError(validationMessage)
      setMessage('')
      return
    }

    try {
      if (isEditing) {
        const nextProjects = await projectGateway.updateProject(
          projects,
          editingId,
          form,
        )
        setProjects(nextProjects)
        setMessage('Project updated.')
      } else {
        const nextProjects = await projectGateway.createProject(projects, form)
        setProjects(nextProjects)
        setMessage('Project created.')
      }

      setError('')
      resetForm()
    } catch (error) {
      setError(error.message || 'Unable to save project.')
      setMessage('')
    }
  }

  const onEdit = (project) => {
    setEditingId(project.id)
    setForm({
      name: project.name,
      owner: project.owner,
      status: project.status,
    })
    setMessage('Editing project.')
    setError('')
  }

  const onDelete = async (id) => {
    try {
      const nextProjects = await projectGateway.deleteProject(projects, id)
      setProjects(nextProjects)
      setMessage('Project deleted.')
      setError('')
      if (editingId === id) {
        resetForm()
      }
    } catch (error) {
      setError(error.message || 'Unable to delete project.')
      setMessage('')
    }
  }

  return (
    <section className="project-crud">
      <h2>Project CRUD Feature</h2>
      <p className="project-crud-subtitle">Create, read, update, and delete projects in one modular feature.</p>

      {error ? <p className="project-error">{error}</p> : null}
      {message ? <p className="project-success">{message}</p> : null}

      <form className="project-form" onSubmit={onSubmit}>
        <label htmlFor="project-name">Project Name</label>
        <input
          id="project-name"
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Enter project name"
        />

        <label htmlFor="project-owner">Owner</label>
        <input
          id="project-owner"
          name="owner"
          value={form.owner}
          onChange={onChange}
          placeholder="Enter owner name"
        />

        <label htmlFor="project-status">Status</label>
        <select id="project-status" name="status" value={form.status} onChange={onChange}>
          <option>Planned</option>
          <option>In Progress</option>
          <option>Completed</option>
          <option>Blocked</option>
        </select>

        <div className="project-actions">
          <button type="submit">{actionLabel}</button>
          {isEditing ? (
            <button type="button" className="cancel" onClick={resetForm}>
              Cancel Edit
            </button>
          ) : null}
        </div>
      </form>

      <div className="project-list">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>Owner: {project.owner}</p>
            <p>Status: {project.status}</p>
            <div className="card-actions">
              <button type="button" onClick={() => onEdit(project)}>
                Edit
              </button>
              <button type="button" className="danger" onClick={() => onDelete(project.id)}>
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default memo(ProjectCrud)
