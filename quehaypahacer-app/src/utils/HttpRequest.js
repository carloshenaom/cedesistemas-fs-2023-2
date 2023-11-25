import axios from 'axios'

export const HTTP_METHODS ={
  POST: 'post',
  GET: 'get',
  DELETE: 'delete',
  PUT: 'put',
  PATCH: 'patch'
}

const headersConfig = (token) =>{
  return{
    "Content_Type":"application/json",
    "Accept":"application/json",
    "Authorization": `Bearer ${token}`
  }
}

export const httpRequest = async({
  method = HTTP_METHODS.POST,
  endpoint = '/',
  body = {},
  params = {},
  token = null

}) =>{
  try {

    const url = import.meta.env.VITE_API_BASE + endpoint
    const options = {
      method,
      url,
      data: body,
      params,
      headers: headersConfig(token)

    }

    return await axios(options)

  } catch (error) {
    throw error
  }

}
