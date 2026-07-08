import projectApi from '../../api/projectApi'
import localProjectService from './projectService'

const useRemoteApi = import.meta.env.VITE_USE_REMOTE_PROJECT_API === 'true'

async function getProjects() {
  if (!useRemoteApi) {
    return localProjectService.getProjects()
  }

  try {
    return await projectApi.getProjects()
  } catch (error) {
    throw {
      ...error,
      message: error.message || 'Failed to fetch projects from API.',
    }
  }
}

async function createProject(currentProjects, payload) {
  if (!useRemoteApi) {
    return localProjectService.createProject(currentProjects, payload)
  }

  try {
    await projectApi.createProject(payload)
    return await projectApi.getProjects()
  } catch (error) {
    throw {
      ...error,
      message: error.message || 'Failed to create project.',
    }
  }
}

async function updateProject(currentProjects, id, payload) {
  if (!useRemoteApi) {
    return localProjectService.updateProject(currentProjects, id, payload)
  }

  try {
    await projectApi.updateProject(id, payload)
    return await projectApi.getProjects()
  } catch (error) {
    throw {
      ...error,
      message: error.message || 'Failed to update project.',
    }
  }
}

async function deleteProject(currentProjects, id) {
  if (!useRemoteApi) {
    return localProjectService.deleteProject(currentProjects, id)
  }

  try {
    await projectApi.deleteProject(id)
    return await projectApi.getProjects()
  } catch (error) {
    throw {
      ...error,
      message: error.message || 'Failed to delete project.',
    }
  }
}

const projectGateway = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
}

export default projectGateway
