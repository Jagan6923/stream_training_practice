import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api'

function normalizeApiError(error) {
  const status = error.response?.status ?? 0
  const responseMessage = error.response?.data?.message

  if (responseMessage) {
    return {
      status,
      message: responseMessage,
      code: 'API_ERROR',
    }
  }

  if (status === 401) {
    return {
      status,
      message: 'Unauthorized request. Please sign in again.',
      code: 'UNAUTHORIZED',
    }
  }

  if (status === 403) {
    return {
      status,
      message: 'You are not allowed to perform this action.',
      code: 'FORBIDDEN',
    }
  }

  if (status >= 500) {
    return {
      status,
      message: 'Server error. Please try again later.',
      code: 'SERVER_ERROR',
    }
  }

  if (error.code === 'ECONNABORTED' || error.message === 'Network Error') {
    return {
      status,
      message: 'Network issue. Check your connection and retry.',
      code: 'NETWORK_ERROR',
    }
  }

  return {
    status,
    message: 'Unexpected API error occurred.',
    code: 'UNKNOWN_ERROR',
  }
}

const httpClient = axios.create({
  baseURL,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
  },
})

httpClient.interceptors.request.use(
  (config) => {
    const requestId = `req-${Date.now()}`
    const authToken = localStorage.getItem('auth.token')

    const nextConfig = {
      ...config,
      headers: {
        ...config.headers,
        'X-Request-Id': requestId,
      },
      metadata: {
        startedAt: performance.now(),
      },
    }

    if (authToken) {
      nextConfig.headers.Authorization = `Bearer ${authToken}`
    }

    return nextConfig
  },
  (error) => Promise.reject(error),
)

httpClient.interceptors.response.use(
  (response) => {
    const startedAt = response.config.metadata?.startedAt
    if (startedAt) {
      const durationMs = Math.round(performance.now() - startedAt)
      if (import.meta.env.DEV) {
        console.info(`[API] ${response.config.method?.toUpperCase()} ${response.config.url} ${durationMs}ms`)
      }
    }

    return response
  },
  (error) => {
    const normalized = normalizeApiError(error)
    return Promise.reject(normalized)
  },
)

export default httpClient
