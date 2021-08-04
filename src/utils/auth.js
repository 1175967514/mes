
const TokenKey = 'Admin-Token'

export function getToken() {
  return sessionStorage.getItem('token');
}

export function setToken(token) {
  return sessionStorage.setItem('token', token);
}

export function removeToken(key) {
  return sessionStorage.removeItem('token');
}


export function getSession(key) {
  return sessionStorage.getItem(key);
}

export function setSession(key,value) {
  return sessionStorage.setItem(key,value);
}

export function removeSession(key) {
  return sessionStorage.removeItem(key);
}

//==================================================================
// import Cookies from 'js-cookie'

const UserInfro = 'souvenirUserInfo'
const UserInformation = 'souvenirUserInfo'

// export function getToken() {
//   return Cookies.get(TokenKey)
// }

// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }

// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }

export function getUserInformation() {
  // return Cookies.get(UserInformation)
}

export function setUserInformation(data) {
  // return Cookies.set(UserInformation, data)
}

export function removeUserInformation() {
  // return Cookies.remove(UserInformation)
}

export function getUserInfro() {
  return sessionStorage.getItem(UserInfro)
}

export function setUserInfro(data) {
  return sessionStorage.setItem(UserInfro, data)
}

export function removeUserInfro() {
  return sessionStorage.removeItem(UserInfro)
}

