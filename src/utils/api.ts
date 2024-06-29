export async function fetchData<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  try {
    const response = await fetch(`https://zelda.fanapis.com/api/${endpoint}`, options)
    // I could add the api basic route to a .ENV but since it's a test API, I just keep it simple
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: T = await response.json()
    return data
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}
