import useAuthUser from './useAuthUser'
import useNotify from './useNotify'
import API_PATH from "~~/enums/API_PATH";
const useAuth = () => {
  const authUser = useAuthUser()
  const setUser = (user: any) => {
    authUser.value = user
  }

  const setAuthCookie = (token: any, expiresTime: any) => {

    const authorization = useCookie<string>('Authorization', { expires: new Date(expiresTime) })
    authorization.value = 'Bearer ' + token

  }
  const getToken = ()=> {
    return useCookie<string>('Authorization')
  }
  const isAuthenticated = () => {
    const authorization = getToken()

    if (authorization.value == undefined || authorization.value == null)
      return false
    return true
  }
  const register = async (
    name: string,
    email: string,
    phone: string,
    dob: string,
    account: string,
    password: string,
  )=> {
    const { data, error }: any = await useAPI({
      path: API_PATH.AUTH_REGISTER
    })._post({ name, email, phone, dob, account, password });
    if(error.value || data.value.statusCode != '200') {
      // useNotify('danger', data.value.message).show()
      return false
    }
    if (data) {
      return data.value
    }
    return null
  }
  const login = async (
    userName: string,
    password: string,
  ) => {
    const { data, error }: any = await useAPI({
      path: API_PATH.AUTH_TOKEN
    })._post({ userName, password });
    
    if (error.value || data.value.status != '200') { // error
      // useNotify('danger', data.value.message).show()
      return false
    }
    if (data) { // success
      setAuthCookie(data.value.data.token, data.value.data.expiresTime)
      me()
      return authUser
    }
    return null // undefine response
  }

  const logout = async () => {
    const { data, error }: any = await useAPI({
      path: API_PATH.AUTH_LOGOUT
    })._post();
    if(error.value || data.value.statusCode != '200') {
      // useNotify('danger', data.value.message).show()
      return false
    }
    if (data) {
      const authCookie = useCookie('Authorization')
      authCookie.value = null
      return true
    }
    return null
  }

  const forgetPassword = async (string: string)=> {
    const { data, error }: any = await useAPI({
      path: API_PATH.AUTH_FORGET_PASSWORD
    })._post(string);
    if(error.value || data.value.statusCode != '200') {
      // useNotify('danger', data.value.message).show()
      return false
    }
    if (data) {
      return data.value
    }
    return null
  }

  const resetPassword = async (
    account: string,
    password: string,
    token: string,
  )=> {
    const { data, error }: any = await useAPI({
      path: API_PATH.AUTH_RESET_PASSWORD
    })._put({ account, password, token });
    if(error.value || data.value.statusCode != '200') {
      // useNotify('danger', data.value.message).show()
      return false
    }
    if (data) {
      return data.value
    }
    return null
  }

  const changePassword = async (
    oldPassword: string,
    password: string,
  )=> {
    const { data, error }: any = await useAPI({
      path: API_PATH.AUTH_CHANGE_PASSWORD
    })._put({ oldPassword, password });
    if(error.value || data.value.statusCode != '200') {
      // useNotify('danger', data.value.message).show()
      return false
    }
    if (data) {
      return data.value
    }
    return null
  }

  const me = async () => {
    if (!authUser.value) {

      try {
        const auth = useCookie<string>('Authorization')
        const data: any = await $fetch('/auth/me', {
          baseURL: useBaseApi(),
          headers: {
            Authorization: auth.value
          },
        })

        setUser(data.user)
      }
      catch (error) {
        logout()
      }
    }

    return authUser
  }

  return {
    register,
    login,
    logout,
    forgetPassword,
    resetPassword,
    changePassword,
    isAuthenticated,
    getToken,
    me
  }
}
export default useAuth