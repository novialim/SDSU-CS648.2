/* eslint "no-alert": "off" */

export default async function graphQLFetch(query, variables = {}) {
  const response = await fetch(window.ENV.UI_API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  })
  const body = await response.text()
  const result = JSON.parse(body)
  return result.data
}