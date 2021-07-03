import { signout } from "./api-auth"

// Define methods for storing jwt from server
const auth = {
  // Saves jwt from fetch response
  authenticate(jwt, cb) {
    if (typeof window !== "undefined")
      sessionStorage.setItem('jwt', JSON.stringify(jwt))
    cb()
  },

  // Retrieves credentials from session storage is there are any
  isAuthenticated() {
    if (typeof window == "undefined")
      return false
    if (sessionStorage.getItem('jwt'))
      return JSON.parse(sessionStorage.getItem('jwt'))
    else
      return dalse
  },

  // Removes jwt is user hits signout path
  // Removes jwt from session storage
  clearJWT(cb) {
    if (typeof window !== "undefined")
      sessionStorage.removeItem('jwt')
    cb()
    signout().then((data) => {
      document.cookie = "t=; expire=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    })
  }
}

export default auth

