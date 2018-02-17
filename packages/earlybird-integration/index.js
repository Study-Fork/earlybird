import fetch from 'isomorphic-fetch'

const graphAddress = 'https://graph.facebook.com/v2.8'

export function createQuery(parameters) {
  return Object.keys(parameters).map(key => `${key}=${parameters[key]}`).join('&')
}

export default function graph(request) {
  const { method, headers, body } = request
  const options = {
    method,
    headers,
    body,
  }
  const url = graphAddress.concat(request.url).concat(method === 'GET' ? `?${createQuery(body)}` : '')
  return fetch(url, options)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error(`HTTP status ${response.status} ${response.statusText}`)
      }
      return response.json()
    })
    .then(json => json.data)
    .catch(error => error)
}
