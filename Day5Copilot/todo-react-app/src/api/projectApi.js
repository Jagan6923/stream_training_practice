import httpClient from './httpClient'

async function getProjects() {
  const response = await httpClient.get('/projects')
  return Array.isArray(response.data) ? response.data : []
}

async function createProject(payload) {
  const response = await httpClient.post('/projects', payload)
  return response.data
}

async function updateProject(id, payload) {
  const response = await httpClient.put(`/projects/${id}`, payload)
  return response.data
}

async function deleteProject(id) {
  await httpClient.delete(`/projects/${id}`)
  return id
}

const projectApi = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
}

export default projectApi
