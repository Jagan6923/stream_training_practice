const STORAGE_KEY = 'project.items'

const seedProjects = [
  {
    id: 101,
    name: 'Website Redesign',
    owner: 'Ananya',
    status: 'In Progress',
  },
  {
    id: 102,
    name: 'Mobile QA Cycle',
    owner: 'Ravi',
    status: 'Planned',
  },
]

function persist(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
}

function safeRead() {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) {
    persist(seedProjects)
    return seedProjects
  }

  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : seedProjects
  } catch {
    return seedProjects
  }
}

async function getProjects() {
  return safeRead()
}

async function createProject(currentProjects, payload) {
  const nextProjects = [
    ...currentProjects,
    {
      id: Date.now(),
      name: payload.name.trim(),
      owner: payload.owner.trim(),
      status: payload.status,
    },
  ]

  persist(nextProjects)
  return nextProjects
}

async function updateProject(currentProjects, id, payload) {
  const nextProjects = currentProjects.map((project) =>
    project.id === id
      ? {
          ...project,
          name: payload.name.trim(),
          owner: payload.owner.trim(),
          status: payload.status,
        }
      : project,
  )

  persist(nextProjects)
  return nextProjects
}

async function deleteProject(currentProjects, id) {
  const nextProjects = currentProjects.filter((project) => project.id !== id)
  persist(nextProjects)
  return nextProjects
}

const projectService = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
}

export default projectService
