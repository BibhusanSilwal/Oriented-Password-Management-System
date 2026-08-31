/*
* These routes do not require authentication
* @type {string[]}
*/
export const publicRoutes = [
    "/"
]
/*
* An array of routes used for authentication
* These routes will redirect logged in users to settings
*/ 
export const authRoutes= [
    "/auth/login",
    "/auth/register"
]
/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * 
 */

export const apiAuthPrefix = "/api/auth" 

/**
 * The default redirect path after loggin in 
 */
export const DEFAULT_LOGIN_REDIRECT = '/home'