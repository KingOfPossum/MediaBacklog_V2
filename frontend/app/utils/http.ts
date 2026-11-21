const baseUrl = 'http://localhost:1234/'
// const baseUrl = 'http://172.16.1.192/'

export async function makeHTTPGETRequest(url: string, params?: Record<string, any>) {
  let finalUrl = baseUrl + url

  if (params) {
    const searchParams = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value))
      }
    })

    const queryString = searchParams.toString()
    if (queryString) {
      finalUrl += (finalUrl.includes('?') ? '&' : '?') + queryString
    }
  }

  const response = await fetch(finalUrl)

  if (!response.ok) {
    console.error(response.statusText)
    throw new Error(`HTTP-Error: ${response.status}`)
  }

  return await response.json()
}

export async function makeHTTPPOSTRequest(url: string, data: object) {
  if (!import.meta.client) return

  try {
    const response = await fetch(baseUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return await response.json()
  } catch (error) {
    console.error('Error during POST request: ', error)
    return { error: 'Server Error' }
  }
}
