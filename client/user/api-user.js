// sends user data to api to create user
const create = async (user) => {
  try {
    let response = await fetch('/api/users', {
      method: 'POST',
      signal: signal,
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
// Make a get request for list of users
const list = async (signal) => {
  try {
    let response = await fetch('/api/users/', {
      method: 'GET',
      signal: signal,
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

// Get request for current user. Must also pass credentials
const read = async (params, credentials, signal) => {
  try {
    let response = await fetch('/api/users/' + params.userId, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

