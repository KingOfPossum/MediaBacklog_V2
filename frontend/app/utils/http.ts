const baseUrl = 'http://localhost:1234/'

export async function makeHTTPGETRequest(url: string) {
  const response = await fetch(baseUrl + url)

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

    await response.json()
  } catch (error) {
    console.error('Error during POST request: ', error)
    return { error: 'Server Error' }
  }
}
