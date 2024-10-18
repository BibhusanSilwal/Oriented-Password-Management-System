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

export const apiAuthPrefix = "/api/auth" 

/**
 * The default redirect path after loggin in 
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings'