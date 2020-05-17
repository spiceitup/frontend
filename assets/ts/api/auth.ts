import axios from "axios"

import { pipe } from "fp-ts/lib/pipeable"

export namespace AuthAPI {
  export interface Service{
    login(user: string, pass: string): Promise<any>
    logout(): Promise<void>
  }

  const env = testEnv()

  export function login(user: string, pass: string): Promise<any>{
    return env.services.login(user,pass)
  } 
  export function logout(): Promise<void>{
    return env.services.logout()
  } 
}

export interface env {
  services: AuthAPI.Service
}

export function testEnv(): env {
  return {
    services: {
      login: (user: string, pass: string) =>  new Promise(() => user === "admin" || pass === "admin" ? "thisisthetoken": ""),
      logout: () => {
        alert('your are logOut')
        return new Promise(()=>{})
      }
    }
  }
}

export function devEnv(): env {
  const loginUrl = '/api/login'
  const logoutUrl = '/api/logout'
  return {
    services: {
      login: (user: string, pass: string) => axios.post(loginUrl, { user, pass }),
      logout: () => axios.post('/api/logout')
    }
  }
}