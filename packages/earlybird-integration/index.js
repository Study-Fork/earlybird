import fetch from 'isomorphic-fetch'

const graphAddress = 'https://graph.facebook.com/v2.11'

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
  if (method === 'GET') delete options.body
  const url = graphAddress
    .concat(request.url)
    .concat(method === 'GET' ? `?${createQuery(Object.assign({}, body))}` : '')
  return fetch(url, options)
    .then((response) => {
      if (response.status >= 400) {
        const _headers = JSON.stringify(response.headers._headers, null, 2)
        const _body = response.text()
        throw new Error(`${response.status} ${response.url} ${_headers} ${_body}`)
      }
      return response.json()
    })
    .then(json => json.data || json)
    .catch(error => error)
}
