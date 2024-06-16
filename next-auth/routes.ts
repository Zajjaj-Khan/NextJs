/**
 * An array of routes accessable tto public
 * No Authentication needed
 * @type {string[]}
 */
export const publicRoutes  =[
    "/",
    "/auth/new-verification"
]

/**
 * An array of routes used for authenticatin
 *  Authentication needed
 * @type {string[]}
 */


export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset"

]

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings"